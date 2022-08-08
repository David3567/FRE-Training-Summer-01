import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDiscover } from '../../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: MovieDiscover[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().subscribe((data) => {
      this.movieData = data.results;
      console.log(this.movieData);
    });
  }
}
