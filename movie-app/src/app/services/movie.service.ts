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

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();
  private defaultId: number = 0;
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=7979b0e432796fe7fa957d6fbbeb0835';
  private testUrl: string =
    'https://api.themoviedb.org/3/list/5?api_key=7979b0e432796fe7fa957d6fbbeb0835';
  private listId = '5';
  constructor(
    private readonly http: HttpClient,
    private helper: HelperService
  ) {}

  getData() {
    throw new Error('Method not implemented.');
  }

  getMovieList() {
    return this.http
      .get(`${this.baseUrl}/list/${this.listId}${this.apiKey}`)
      .pipe(
        <any>tap(({ poster_path, title, release_date, vote_average }: any) => {
          this.movies = [
            { poster_path, title, release_date, vote_average },
            ...this.movies,
          ];


        this.moviesSubject$.next(this.movies);
      })
      );
  }

  searchMovies(movieName: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie${this.apiKey}&query=${movieName}`
    );
  }

  getMoviesList(): Observable<any> {
    let id =
      this.defaultId > 0 ? this.defaultId : Math.floor(Math.random() * 40);
    let url = `https://api.themoviedb.org/3/list/${id}?api_key=7979b0e432796fe7fa957d6fbbeb0835`;

    return this.http.get<RootObject>(url, this.helper.httpOptions).pipe(
      debounceTime(100),
      map(({ items }: any) => {
        console.log('Successfully retrieved movies here\n', items);
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
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=7979b0e432796fe7fa957d6fbbeb0835`;

    return this.http.get<RootObject>(url).pipe(
      debounceTime(50),
      map(({ results }: any) => {
        // console.log('Successfully retrieved trending movies here\n', results);
        return results;
      }),
      catchError(this.helper.errorHandler<any>('getTrendingMovies'))
    );
  }

  getVideoById(id: number): Observable<any> {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos${this.apiKey}&language=en-US`;

    return this.http.get(url, this.helper.httpOptions).pipe(
      map(({ results }: any) => {
        console.log("movie video successfully retrieved")
        console.log(results)
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
    let url = `https://api.themoviedb.org/3/movie/${id+this.apiKey}&language=en-US`
    return this.http.get(url, this.helper.httpOptions)
  }
}
