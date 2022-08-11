import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  movie$!: Observable<any>;
  bannerMovie!: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies: any) => {
      this.bannerMovie = movies[0];
      this.movies = movies.filter((m: any, i: number) => i > 0);
    });

    // this.getData();
    this.movie$ = this.movieService.movies$;
  }

  getData(): void {
    // for (let i = 0; i < 20; i++) {
    //   this.movieService.getMovies().subscribe(console.log);
    //   this.movieService.getMovieList().subscribe(console.log);

    // }
    this.movieService.getMovieList().subscribe(console.log);
  }
}
