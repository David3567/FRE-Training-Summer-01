import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  map,
  Observable,
  tap,
} from 'rxjs';
import { Movie, RootObject } from '../interfaces/movie.interface';
import { HelperService } from './helper.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();
  private defaultId: number = 0;
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKeys?: string = "7979b0e432796fe7fa957d6fbbeb0835";

  authData: any;

  constructor(
    private readonly http: HttpClient,
    private helper: HelperService
  ) {}

  getApi(apikey: string) {
    this.apiKeys = apikey;
  }

  searchMovies(movieName: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKeys}&query=${movieName}`
    );
  }

  getMoviesList(): Observable<any> {
    let id =
      this.defaultId > 0 ? this.defaultId : Math.floor(Math.random() * 500);
    let url = `https://api.themoviedb.org/3/list/${id}?api_key=${this.apiKeys}`;

    return this.http.get<RootObject>(url, this.helper.httpOptions).pipe(
      debounceTime(100),
      map(({ items }: any) => {
        console.log('Successfully retrieved movies here\n');
        if (items.length === 0) {
          this.defaultId = 5;
          this.getMoviesList();
        }
        return items;
      }),
      catchError(this.helper.errorHandler<any>('getMoviesList'))
    );
  }

  getTrendingMovies() {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKeys}`;

    return this.http.get<RootObject>(url).pipe(
      debounceTime(50),
      map(({ results }: any) => {
        console.log('Successfully retrieved trending movies here\n', results);
        return results;
      }),
      catchError(this.helper.errorHandler<any>('getTrendingMovies'))
    );
  }

  getVideoById(id: number): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKeys}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions).pipe(
      map(({ results }: any) => {
        console.log('movie video successfully retrieved');
        return results.map((result: any) => {
          return {
            id: result.id,
            name: result.name,
            key: result.key,
            type: result.type,
          };
        });
      }),
      catchError(this.helper.errorHandler<any>('GetMovie'))
    );
  }

  getSingleMovie(id: number): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKeys}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions);
  }
}
