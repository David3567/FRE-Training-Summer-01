import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Info, Movie } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService {
  private discoverSearch: Info[] = [];
  private discoverSearchSubject$ = new BehaviorSubject(this.discoverSearch);
  discoverSearch$ = this.discoverSearchSubject$.asObservable();
  discover$: any;

  constructor(private readonly http: HttpClient) {}

  addAdditionallyPage(movieName: string, page: number, apiKey: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&page=${page}`
      )
      .pipe(
        <any>tap(({ results }: Movie) => {
          this.discoverSearch = this.discoverSearch.concat(
            results.map(
              ({ release_date, title, poster_path, vote_average }) => {
                return {
                  release_date: release_date,
                  title: title,
                  poster_path: poster_path,
                  vote_average: vote_average,
                };
              }
            )
          );
          this.discoverSearchSubject$.next(this.discoverSearch);
        })
      );
  }

  getSearch(movieName: string, apiKey: string) {
    if (movieName.trim() !== '')
      return this.http
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
        )
        .pipe(
          <any>tap(({ results, total_pages }: Movie) => {
            this.discoverSearch = results.map(
              ({ release_date, title, poster_path, vote_average }) => {
                return {
                  release_date: release_date,
                  title: title,
                  poster_path: poster_path,
                  vote_average: vote_average,
                };
              }
            );
            this.discoverSearchSubject$.next(this.discoverSearch);
          })
        );
    return of('err');
  }

  clearData() {
    this.discoverSearch$ = of([]);
  }
}
