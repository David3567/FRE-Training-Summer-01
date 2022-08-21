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

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();
  private defaultId: number = 0;
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '7979b0e432796fe7fa957d6fbbeb0835';

  constructor(
    private readonly http: HttpClient,
    private helper: HelperService
  ) {}

  ngOnInint() {}

  getData() {
    throw new Error('Method not implemented.');
  }

  searchMovies(movieName: string, apiKey: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${apiKey}&query=${movieName}`
    );
  }

  getMoviesList(apiKey: string): Observable<any> {
    let id =
      this.defaultId > 0 ? this.defaultId : Math.floor(Math.random() * 500);
    let url = `https://api.themoviedb.org/3/list/${id}?api_key=${apiKey}`;

    return this.http.get<RootObject>(url, this.helper.httpOptions).pipe(
      debounceTime(100),
      map(({ items }: any) => {
        console.log('Successfully retrieved movies here\n', items);
        if (items.length === 0) {
          this.defaultId = 5;
          this.getMoviesList(apiKey);
        }
        return items;
      }),
      catchError(this.helper.errorHandler<any>('getMoviesList'))
    );
  }

  getTrendingMovies(apiKey: string) {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

    return this.http.get<RootObject>(url).pipe(
      debounceTime(50),
      map(({ results }: any) => {
        console.log('Successfully retrieved trending movies here\n', results);
        return results;
      }),
      catchError(this.helper.errorHandler<any>('getTrendingMovies'))
    );
  }

  getVideoById(id: number, apiKey: string): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions).pipe(
      map(({ results }: any) => {
        console.log('movie video successfully retrieved');
        console.log(results);
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

  getSingleMovie(id: number, apiKey: string): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions);
  }
}
