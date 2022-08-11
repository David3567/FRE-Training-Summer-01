import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, of } from 'rxjs';
import { SearchRootObject, Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=7979b0e432796fe7fa957d6fbbeb0835';

  private searchList: any[] = [];
  private searchListSubject$ = new BehaviorSubject(this.searchList);
  searchList$ = this.searchListSubject$.asObservable();

  constructor(private readonly http: HttpClient) {}

  searchMovies(movieName: string) {
    if (movieName.trim() !== '')
      return this.http
        .get(`${this.baseUrl}/search/movie${this.apiKey}&query=${movieName}`)
        .pipe(
          <any>tap(({ results, page }: SearchRootObject) => {
            this.searchList = results.map(
              ({ release_date, title, poster_path, vote_average }) => {
                return {
                  release_date: release_date,
                  title: title,
                  poster_path: poster_path,
                  vote_average: vote_average,
                };
              }
            );

            this.searchListSubject$.next(this.searchList);
          })
        );
    return of();
  }
}
