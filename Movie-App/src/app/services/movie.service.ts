import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieDiscoverList } from '../movies';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  RAW_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  PagesUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697`;
  page: number = 0
  constructor(private http: HttpClient) {}

  //Get Movies
  getDiscoverMovies(): Observable<MovieDiscoverList> {
    return this.http.get<MovieDiscoverList>(this.RAW_URL);
  }

  //Get Pages
  getMorePages(): Observable<Movie>{
    this.page++
    return this.http.get<Movie>(this.PagesUrl , {
      params: { page: this.page }
    })
  }
}
