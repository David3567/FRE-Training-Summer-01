import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MovieDetails, MovieResults } from '../interfaces/tmdb.interface';
import { SharedApiDataService } from './shared-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sharedApiService: SharedApiDataService,
  ) { }

searchMovie(title: string, page?: string | null){
  const url: string = this.sharedApiService.searchMovieUrl + "/movie";
  return this.httpClient.get<MovieResults>(url, 
    {
      headers: this.sharedApiService.httpHeaders,
      params: {
        query: title,
        page: page || '1'
      }
    }).pipe(
    map((movieResults) => {
      const results = movieResults.results;
      return results;
    })
  );
}
}