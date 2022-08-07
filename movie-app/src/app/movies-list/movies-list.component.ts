import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies:any) => {
      console.log("Movies")
      console.log(movies)
      this.movies = movies;
    });
  }
}
