import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Movie, RootObject } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getData() {
    throw new Error('Method not implemented.');
  }
  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=7979b0e432796fe7fa957d6fbbeb0835';
  private testUrl: string =
    'https://api.themoviedb.org/3/list/5?api_key=7979b0e432796fe7fa957d6fbbeb0835';
  private listId = '5';
  constructor(private readonly http: HttpClient) {}

  // Not gonna work due to interface collisons
  // getMovies() {
  //   return this.http
  //     .get(
  //       // Will give path error have to fix
  //       // [
  //       //   this.baseUrl + '/movie/',
  //       //   Math.floor(Math.random() * 500).toString(),
  //       //   this.apiKey,
  //       // ].join('')
  //       'https://api.themoviedb.org/3/movie/50?api_key=7979b0e432796fe7fa957d6fbbeb0835'
  //     )
  //     .pipe(
  //       <any>tap(({ items }: RootObject) => {
  //         this.movies = items.map(
  //           ({ release_date, title, poster_path, vote_average }) => {
  //             return {
  //               release_date: release_date,
  //               title: title,
  //               poster_path: poster_path,
  //               vote_average: vote_average,
  //             };
  //           }
  //         );
  //         this.moviesSubject$.next(this.movies);
  //       })
  //     );
  //   return of('err');
  // }

  getMovieList() {
    return this.http
      .get(`${this.baseUrl}/list/${this.listId}${this.apiKey}`)
      .pipe(
        <any>tap(({ items }: RootObject) => {
          this.movies = items.map(
            ({ release_date, title, poster_path, vote_average }) => {
              return {
                release_date: release_date,
                title: title,
                poster_path: poster_path,
                vote_average: vote_average,
              };
            }
          );
          this.moviesSubject$.next(this.movies);
        })
      );
  }

  searchMovies(movieName: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie${this.apiKey}&query=${movieName}`
    );
  }
}
