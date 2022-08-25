import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDialogComponent } from '../movie-dialog.component';

@Component({
  selector: 'app-movie-dialog-entry',
  templateUrl: './movie-dialog-entry.component.html',
  styleUrls: ['./movie-dialog-entry.component.scss']
})
export class MovieDialogEntryComponent implements OnInit {
  movie?: any;
  casts: any = [];
  videos: any = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: MoviesService
  ) {
    const currMovie = this.router.getCurrentNavigation()?.extras.state?.currMovie;
    this.openDialog(currMovie)
  }

  openDialog(movie: any): void {
    this.movie = movie;

    this.route.data.subscribe((response: any) => {
      console.log('MOVIE DIALOG FETCHING', response)
      this.casts = response.resolvedData.credits.cast;
      this.videos = response.resolvedData.videos;
      console.log('MOVIE DIALOG FETCHED')
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

        dialogRef.afterClosed().subscribe(_ => {
          this.router.navigate(['../movielist'])
        })
      }
    });
  }

  ngOnInit(): void {
  }

}
