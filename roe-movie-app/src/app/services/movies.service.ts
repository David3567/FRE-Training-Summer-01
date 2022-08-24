import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Root, Result } from '../interfaces/root';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly baseURL = 'https://api.themoviedb.org/3/discover/movie/';
  private readonly upcominURL = 'https://api.themoviedb.org/3/movie/upcoming';
  private readonly SearchByTitleURL = 'https://api.themoviedb.org/3/search/movie/';
  private readonly MoviInfoURL = 'https://api.themoviedb.org/3/movie';
  private readonly api_key: string = '6e7a30a6be99643eb9de647bea8a65b1';
  page: number = 1;
  public moveiList$: BehaviorSubject<Object> = new BehaviorSubject({});
  public moveiCredit$: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getMovies(page: number): Observable<any> {
    this.page = page;
    return this.http.get(`${this.baseURL}?page=${this.page}&api_key=${this.api_key}`);
      // .pipe(
      //   map((result) => {
      //     this.moveiList$?.next(result);
      //     return this.moveiList$.value;
      //   })
      // );
  }

  getUpcoming(date: string, page: number): Observable<any>{
    return this.http.get(`${this.upcominURL}?page=${page}&primary_release_date.gte=${date}&api_key=${this.api_key}`)
      // .pipe(
      //   map((result) => {
      //     this.moveiList$?.next(result);
      //     return this.moveiList$.value;
      //   })
      // );
  }

  getByTitle(query: string, page: number): Observable<any> {
    return this.http.get(`${this.SearchByTitleURL}?page=${page}&api_key=${this.api_key}&query=${query}`)
      // .pipe(
      //   map((result) => {
      //     this.moveiList$?.next(result);
      //     return this.moveiList$.value;
      //   })
      // );
  }

/*~~~~~~~~~~~~~~~~~~~~~~~ Movie Item Service ~~~~~~~~~~~~~~~~~~~~~~~ */

  getMovieInfo(movieID: number) : Observable<any> {
    return this.http.get(`${this.MoviInfoURL}/${movieID}?&api_key=${this.api_key}&append_to_response=images,credits,videos`)
      // .pipe(
      //   map((result) => {
      //     this.moveiList$?.next(result);
      //     return this.moveiList$.value;
      //   })
      // );
  }

  getCredits(movieID: number) : Observable<any> {
    return this.http.get(`${this.MoviInfoURL}/${movieID}/credits?api_key=${this.api_key}`)
      // .pipe(
      //   map((result) => {
      //     this.moveiCredit$.next(result);
      //     return this.moveiCredit$.value;
      //   })
      // );
  }

  getMovieVideos(movieID: number) : Observable<any> {
    return this.http.get(`${this.MoviInfoURL}/${movieID}/videos?api_key=${this.api_key}`)
      // .pipe(
      //   map((result) => {
      //     this.moveiCredit$.next(result);
      //     return this.moveiCredit$.value;
      //   })
      // );
  }
  
  homeInfo = [
    {
      h: "Enjoy on your TV.",
      p: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    },
    {
      h: "Download your shows to watch offline.",
      p: "Save your favorites easily and always have something to watch."
    },
    {
      h: "Watch everywhere.",
      p: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
    },
    {
      h: "Create profiles for kids.",
      p: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    },
    {
      h: "Don't miss your shows.",
      p: "Watch whenever you want. No schedules or missed programs."
    }
  ]
}
