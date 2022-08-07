import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Movie, RootObject } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();

  private baseUrl: string = 'https://api.themoviedb.org/3/movie/';
  private apiKey: string = '?api_key=7979b0e432796fe7fa957d6fbbeb0835';

  constructor(private readonly http: HttpClient) {}

  getMovies() {
    return this.http
      .get(
        [
          this.baseUrl,
          Math.floor(Math.random() * 500).toString(),
          this.apiKey,
        ].join('')
      )
      .pipe(
        <any>tap(({ poster_path, title, release_date, vote_average }: RootObject) => {
          this.movies = [{ poster_path, title, release_date, vote_average}, ...this.movies];
          this.moviesSubject$.next(this.movies);
        })
      );
  }
}
