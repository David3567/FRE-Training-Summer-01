import { Component, OnInit } from '@angular/core';
import { MovieList, RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MovieService],
})
export class HomepageComponent implements OnInit {
  movieList!: MovieList;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovie()
      .subscribe((movie: any) => (this.movieList = movie));
  }

  getMovieList() {
    console.log(this.movieList);
  }
}
