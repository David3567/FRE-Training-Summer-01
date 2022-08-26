import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieDiscoverList } from '../movies';
import {  debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  RAW_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`;
  MOVIE_URL: string = `https://api.themoviedb.org/3/movie/157336?api_key=3b12cfa2e8e41ce85be82944f8b7e697&append_to_response=videos`
  api_key: string = `3b12cfa2e8e41ce85be82944f8b7e697`
  Number: number = 0
  constructor(private http: HttpClient) {}

  //Get Movies
  getDiscoverMovies(): Observable<MovieDiscoverList> {
    return this.http.get<MovieDiscoverList>(this.RAW_URL);
  }

  //Get Pages
    getMorePages(): Observable<Movie> {
    let num = this.Number > 0 ? this.Number : Math.floor(Math.random() * 500)

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`
    return this.http.get<any>(url)
    .pipe(
      debounceTime(100),
      map(({page}) => {
        console.log("Successfully retrieved movies here\n", page);
        if (page.length === 0){
          this.Number = 5
          this.getMorePages()
        }
        return page
      })
    )
    // return this.http.get(`https://api.themoviedb.org/3/list/${Number}?api_key=3b12cfa2e8e41ce85be82944f8b7e697`)
    // .pipe(map((res: any) => res.data.page))
    }

  getMovies(): Observable<MovieDiscoverList> {
    return this.http.get<MovieDiscoverList>(this.MOVIE_URL);
  }
}
