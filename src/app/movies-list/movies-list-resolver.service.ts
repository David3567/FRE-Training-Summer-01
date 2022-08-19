import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesListResolverService implements Resolve<Movie[]> {
  constructor(private tmdb: MovieService) {}

  resolve(): Observable<Movie[]> {
    return this.tmdb.getMovie();
  }
}
