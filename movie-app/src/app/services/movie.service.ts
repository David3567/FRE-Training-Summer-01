import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, map, Observable, of, tap } from 'rxjs';
import { Movie, RootObject } from '../interfaces/movie.interface';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();

  private baseUrl: string = 'https://api.themoviedb.org/3/movie/';
  private apiKey: string = '?api_key=7979b0e432796fe7fa957d6fbbeb0835';

  constructor(
    private readonly http: HttpClient,
    private helper: HelperService) { }

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

  defaultId: number = 0;
  getMoviesList(): Observable<any> {
    let id = this.defaultId > 0 ? this.defaultId : Math.floor(Math.random() * 500);

    let url = `https://api.themoviedb.org/3/list/${id}?api_key=7979b0e432796fe7fa957d6fbbeb0835`

    return this.http.get<any>(url, this.helper.httpOptions)
      .pipe(
        debounceTime(100),
        map(({items}) => {
          console.log("Successfully retrieved movies here\n", items);
          if (items.length === 0) {
            this.defaultId = 5
            this.getMoviesList();
          }
          return items;
        }),
        catchError(this.helper.errorHandler<any>("getMoviesList"))
    )
  }
}

