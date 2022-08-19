import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ movies }) => {
      this.movies.push(...movies);
    });
  }

  onScroll() {
    this.movieService.getMovie().subscribe((movies) => {
      this.movies.push(...movies);
    });
  }
}
