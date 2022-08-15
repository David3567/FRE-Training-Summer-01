import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Router } from '@angular/router';
import { fromEvent, debounceTime, distinctUntilChanged, map, switchMap, mergeMap, filter, isEmpty, forkJoin } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { getLocaleDirection } from '@angular/common';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  public Movies?: any = []
  SearchForm = new FormGroup({
    search: new FormControl(''),
    upcoming: new FormControl(''),
    nowplaying: new FormControl('')
  })
  @ViewChild('search', { static: true }) name: ElementRef = new ElementRef('');

  page: number = 1
  searchPage: number = 1
  upcomingPage: number = 1
  movie?: any;
  isDisabled = false;

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start MOVI INFO variables */
  videos: any = []
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End MOVI INFO variables */
  constructor(
    public router: Router,
    private service: MoviesService,
    public dialog: MatDialog) { }
    public casts=[]
  openDialog(movie: any): void {
    this.movie = movie;
    forkJoin(this.service.getCredits(movie.id),this.service.getMovieVideos(movie.id)).subscribe((res: any) => { this.casts = res[0].cast;
      this.videos=res[1]
      let dialogRef = this.dialog.open(MovieDialogComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          movie:this.movie,
          casts:this.casts,
          videos:this.videos
        },
        disableClose: true,
      });

      dialogRef.backdropClick().subscribe(_ => {
        dialogRef.close();
      })})
  }

  ngOnInit(): void {
    this.service.getMovies(this.page).subscribe((result: any) => { this.Movies = result.results; console.log(this.Movies) })
    this.SearchForm.controls.nowplaying.setValue('true')
  }

  ngAfterViewInit() {
    this.SearchTitle()
  }

  selectNowPlaying() {
    if (this.SearchForm.controls.upcoming.enabled) { this.SearchForm.controls.upcoming.reset() }
    this.SearchForm.controls.search.setValue('')
    this.service.getMovies(1).subscribe((result: any) => { this.Movies = result.results; console.log(this.Movies) })
  }

  SearchTitle() {
    fromEvent(this.name.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap(ev =>
          this.service.getByTitle(this.name.nativeElement.value, this.searchPage).
            pipe(map(result => { return result }))
        )).subscribe(result => {
          console.log(result)
          this.Movies = result.results
        })
  }

  changeOtherControls() {
    if (this.SearchForm.controls.nowplaying.enabled) { this.SearchForm.controls.nowplaying.reset() }
    if (this.SearchForm.controls.upcoming.enabled) { this.SearchForm.controls.upcoming.reset() }
  }

  selectUpcoming() {
    let date = new Date().toISOString().split('T')[0]
    console.log(date)
    if (this.SearchForm.controls.nowplaying.enabled) { this.SearchForm.controls.nowplaying.reset() }
    this.SearchForm.controls.search.setValue('')
    this.service.getUpcoming(date, this.upcomingPage).subscribe((result: any) => { this.Movies = result.results; })
  }

  onScroll(): void {
    this.page++
    if (this.page == 350) { this.page = 1 }
    if (this.SearchForm.controls.nowplaying.enabled) {
      this.service.getMovies(this.page).subscribe((result: any) => { for (let i of result.results) { this.Movies.push(i) } })
    }

  }

  goDirection(str:string){
    if(str=="down"){this.Movies.splice(this.Movies.length-20,20)}
  }
  // onActivate(event: any) {
  //   let scrollToTop = window.setInterval(() => {
  //     let pos = window.pageYOffset;
  //     if (pos > 0) {
  //       window.scrollTo(0, pos - 20); // how far to scroll on each step
  //     } else {
  //       window.clearInterval(scrollToTop);
  //     }
  //   }, 16);
  // }

}
