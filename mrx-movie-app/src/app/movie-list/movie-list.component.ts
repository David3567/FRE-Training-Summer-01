import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  movies2: Movie[] = [];
  movies3: Movie[] = [];
  movies4: Movie[] = [];

  movies$!: Observable<Movie[]>;


  constructor(public readonly movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe();

    this.movies$ = this.movieService.movies$;

    this.movies$.subscribe((list) => {
      this.movies = list.slice(0,4);
      this.movies2 = list.slice(4,8);
      this.movies3 = list.slice(8,12);
      this.movies4 = list.slice(12,16);
    })
  }

}
