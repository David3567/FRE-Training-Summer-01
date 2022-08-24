import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieDetails, MovieResults } from '../interfaces/tmdb.interface';
import { SharedApiDataService } from './shared-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDiscoverService {

  constructor(
    private readonly http: HttpClient,
    private readonly sharedApiService: SharedApiDataService
  ) { }

  getMovies(page: number): Observable<MovieDetails[]> {
    return this.http.get(
      [this.sharedApiService.discoverUrl, "movie"].join('/'),
      {
        headers: this.sharedApiService.httpHeaders,
        params: {
          page: '' + page
        }
      }).pipe(<any>map((movieResults: MovieResults) => {
        let results: MovieDetails[] = movieResults.results;
        for (let result of results) {
          this.sharedApiService.setMovieImageUrl(result);
        }
        return results;
      }));
  }
}
