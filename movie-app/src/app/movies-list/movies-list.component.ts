import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  bannerMovie!: any;
// <<<<<<< HEAD
  selectedMovieVideo!: Video
  showMovie: boolean = false;
  constructor(
    public sanitize: DomSanitizer,
    private movieService: MovieService) { }
// ||||||| a1582c4

  // constructor(private movieService: MovieService) { }
// =======
  trending:any[]=[]

//   constructor(private movieService: MovieService) { }
// >>>>>>> 26c97cdfb038a7cfea72910605391e9d8887129f

  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies: any) => {
      console.log(movies)
      this.bannerMovie = movies[0]
      this.movies = movies.filter((m:any, i:number) => i > 0);
    });

  }

  onWatchTrailer(id: number): void{
    this.showMovie = true;
    this.movieService.getVideo(id)
      .subscribe((trailer: Video[]) => {
      console.log("Watching trailer now...")
        console.dir(trailer);
        this.selectedMovieVideo = trailer[0];
    })
  }
}
