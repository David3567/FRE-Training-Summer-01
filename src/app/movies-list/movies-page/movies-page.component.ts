import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movieList: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies()
  }

  onScroll() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovie().subscribe((movies) => {
      this.movieList.push(...movies);
    });
  }
}
