import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  BASE_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  constructor(private http: HttpClient) {}

  //Get Movies
  getDiscoverMovies() {
    return this.http.get<any>(this.BASE_URL);
  }
}
