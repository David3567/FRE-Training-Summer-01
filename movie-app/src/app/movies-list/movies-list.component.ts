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
  selectedMovieVideo!: Video
  showMovie: boolean = false;
  constructor(
    public sanitize: DomSanitizer,
    private movieService: MovieService) { }
  trending:any[]=[]


  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies: any) => {
      console.log(movies)
      this.bannerMovie = movies[0]
      this.movies = movies.filter((m:any, i:number) => i > 0);
    });

    this.movieService.getTrendingMovies().subscribe((movies: any) => {
      this.trending = movies
    });
  }

  onWatchTrailer(id: number): void{
    this.showMovie = true;
    this.movieService.getVideoById(id)
      .subscribe((trailer: Video[]) => {
      console.log("Watching trailer now...")
        console.dir(trailer);
        this.selectedMovieVideo = trailer[0];
    })
  }
}
