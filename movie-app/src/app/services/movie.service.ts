import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';
import { Movie, RootObject } from '../interfaces/movie.interface';
import { HelperService } from './helper.service';
import jwt_decode from 'jwt-decode';
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
  private apiKeys?: string;

  authData: any;

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService,
    private helper: HelperService
  ) {}


  ngOnInint() {}

  getApi(apikey: string) {
    this.apiKeys = apikey;
  }

  getData() {
    throw new Error('Method not implemented.');

  }

  searchMovies(movieName: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKeys}&query=${movieName}`
    );
  }

  getMoviesList(_apiKey: any): Observable<any> {
    let id =
      this.defaultId > 0 ? this.defaultId : Math.floor(Math.random() * 500);
    let url = `https://api.themoviedb.org/3/list/5?api_key=${_apiKey}`;

    return this.http.get<RootObject>(url, this.helper.httpOptions).pipe(
      debounceTime(100),
      map(({ items }: any) => {
        console.log('Successfully retrieved movies here\n');
        if (items.length === 0) {
          this.defaultId = 5;
          this.getMoviesList(_apiKey);
        }
        return items;
      }),
      catchError(this.helper.errorHandler<any>('getMoviesList'))
    );
  }

  getTrendingMovies(_apiKey: any) {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${_apiKey}`;

    return this.http.get<RootObject>(url).pipe(
      debounceTime(50),

      map(({ results }: any) => results),

      catchError(this.helper.errorHandler<any>('getTrendingMovies'))
    );
  }

  getVideoById(id: number): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKeys}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions).pipe(
      map(({ results }: any) => {

        console.log("movie video successfully retrieved")

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
