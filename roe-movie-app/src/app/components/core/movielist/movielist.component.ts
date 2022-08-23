import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  pipe,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  mergeMap,
  filter,
  isEmpty,
  forkJoin,
} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { getLocaleDirection } from '@angular/common';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit {
  public Movies?: any = [];
  SearchForm = new FormGroup({
    search: new FormControl(''),
    upcoming: new FormControl(''),
    nowplaying: new FormControl(''),
  });

  page: number = 1;
  searchPage: number = 1;
  upcomingPage: number = 1;
  movie?: any;

  /*~~~~~~~~~~~~~~~~~~~~~~~ Start MOVI ITEM variables ~~~~~~~~~~~~~~~~~~~~~~~~  */
  casts: any = [];
  videos: any = [];
  /*~~~~~~~~~~~~~~~~~~~~~~~ End MOVI ITEM variables ~~~~~~~~~~~~~~~~~~~~~~~~  */

  constructor(
    public router: Router,
    private service: MoviesService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((response: any) => {
      console.log('MOVIE FETCHING', response)
      this.Movies = response.Movies.movies.results;
      console.log('MOVIE FETCHED')
    });
  }

  ngOnInit(): void {
    this.SearchForm.controls.nowplaying.setValue('true');
  }

  ngAfterViewInit() {
    this.SearchTitle();
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~ Pre-fetched Data Methods ~~~~~~~~~~~~~~~~~~~~~~~~  */

  selectNowPlaying() {
    if (this.SearchForm.controls.upcoming.enabled) {
      this.SearchForm.controls.upcoming.reset();
    }
    this.SearchForm.controls.search.setValue('');
    this.route.data.subscribe((response: any) => {
      console.log('NOW PLAYING FETCHING', response)
      this.Movies = response.Movies.movies.results;
      console.log('NOW PLAYING FETCHED')
    });
    // this.service.getMovies(1).subscribe((result: any) => {
    //   this.Movies = result.results;
    //   console.log(this.Movies);
    // });
  }

  selectUpcoming() {
    // let date = new Date().toISOString().split('T')[0];
    // console.log(date);
    if (this.SearchForm.controls.nowplaying.enabled) {
      this.SearchForm.controls.nowplaying.reset();
    }
    this.SearchForm.controls.search.setValue('');
    this.route.data.subscribe((response: any) => {
      console.log('UPCOMING FETCHING', response)
      this.Movies = response.Movies.upcomings.results;
      console.log('UPCOMING FETCHED')
    });
    // this.service
    //   .getUpcoming(date, this.upcomingPage)
    //   .subscribe((result: any) => {
    //     this.Movies = result.results;
    //   });
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~ END Pre-fetched Data Methods ~~~~~~~~~~~~~~~~~~~~~~~~  */

  openDialog(movie: any): void {
    this.movie = movie;
    forkJoin([
      this.service.getCredits(movie.id),
      this.service.getMovieVideos(movie.id),
    ]).subscribe((res: any) => {
      this.casts = res[0].cast;
      this.videos = res[1];
      console.log(this.casts, this.videos);
      if (this.videos.results.length !== 0) {
        let dialogRef = this.dialog.open(MovieDialogComponent, {
          panelClass: 'custom-dialog-container',
          data: {
            movie: this.movie,
            casts: this.casts.filter((cast: { profile_path: string; }) => cast.profile_path),
            videos: this.videos,
          },
          disableClose: true,
        });

        dialogRef.backdropClick().subscribe((_) => {
          dialogRef.close();
        });
      }
    });
  }



  SearchTitle() {
    this.SearchForm.get('search')?.valueChanges.subscribe((ev: any) => {
      debounceTime(500), distinctUntilChanged();
      if (ev === '') {
        return;
      }
      this.service
        .getByTitle(ev, this.searchPage)
        .subscribe((result) => (this.Movies = result.results));
    });
  }

  changeOtherControls() {
    if (this.SearchForm.controls.nowplaying.enabled) {
      this.SearchForm.controls.nowplaying.reset();
    }
    if (this.SearchForm.controls.upcoming.enabled) {
      this.SearchForm.controls.upcoming.reset();
    }
  }


  onScroll(): void {
    this.page++;
    if (this.page == 350) {
      this.page = 1;
    }
    if (this.SearchForm.controls.nowplaying.enabled) {
      this.service.getMovies(this.page).subscribe((result: any) => {
        for (let i of result.results) {
          this.Movies.push(i);
        }
      });
    }
  }

  goDirection(str: string) {
    if (str == 'down') {
      this.Movies.splice(this.Movies.length - 20, 20);
    }
  }

   signout() {
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
}