import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movieList = [];

  ngOnInit(): void {
    this.movieService.getMovie().subscribe((movie: any) => {
      this.movieList = movie;
      console.log(movie);
    });
  }
  
}
