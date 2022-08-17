import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Root, Result } from '../interfaces/root';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly baseURL = 'https://api.themoviedb.org/3/discover/movie/';
  private readonly upcominURL = 'https://api.themoviedb.org/3/movie/upcoming';
  private readonly SearchByTitleURL =
    'https://api.themoviedb.org/3/search/movie/';
  private readonly MoviInfoURL = 'https://api.themoviedb.org/3/movie';
  private readonly api_key: string = '6e7a30a6be99643eb9de647bea8a65b1';
  page: number = 1;
  public moveiList$: BehaviorSubject<Object> = new BehaviorSubject({});
  public moveiCredit$: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    this.page = page;
    return this.http
      .get(`${this.baseURL}?page=${this.page}&api_key=${this.api_key}`)
      .pipe(
        map((result) => {
          this.moveiList$?.next(result);
          return this.moveiList$.value;
        })
      );
  }

  getUpcoming(date: string, page: number) {
    return this.http
      .get(
        `${this.upcominURL}?page=${page}&primary_release_date.gte=${date}&api_key=${this.api_key}`
      )
      .pipe(
        map((result) => {
          this.moveiList$?.next(result);
          return this.moveiList$.value;
        })
      );
  }

  getCredits(movieID: number) {
    return this.http
      .get(`${this.MoviInfoURL}/${movieID}/credits?api_key=${this.api_key}`)
      .pipe(
        map((result) => {
          this.moveiCredit$.next(result);
          return this.moveiCredit$.value;
        })
      );
  }

  getMovieVideos(movieID: number) {
    return this.http
      .get(`${this.MoviInfoURL}/${movieID}/videos?api_key=${this.api_key}`)
      .pipe(
        map((result) => {
          this.moveiCredit$.next(result);
          return this.moveiCredit$.value;
        })
      );
  }

  getByTitle(query: string, page: number): Observable<any> {
    return this.http
      .get(
        `${this.SearchByTitleURL}?page=${page}&api_key=${this.api_key}&query=${query}`
      )
      .pipe(
        map((result) => {
          this.moveiList$?.next(result);
          return this.moveiList$.value;
        })
      );
  }

  getMovieInfo(id: number) {
    return this.http
      .get(
        `${this.MoviInfoURL}/${id}?&api_key=${this.api_key}&append_to_response=images,credits,videos`
      )
      .pipe(
        map((result) => {
          this.moveiList$?.next(result);
          return this.moveiList$.value;
        })
      );
  }
}
