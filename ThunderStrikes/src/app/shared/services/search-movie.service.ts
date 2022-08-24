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

// getMovieList(option: MovieOptions): Observable<MovieDetails[]> {
//   return this.httpClient.get([this.sharedApiService.baseUrl, option].join("/"), { headers: this.sharedApiService.httpHeaders }).pipe(
//     <any>map((data: MovieResults) => {
//       let results: MovieDetails[] = data.results;
//       if (option === MovieOptions.Now_Playing) {
//         results = results.slice(0, this.movieCount) as MovieDetails[];
//       }
//       for (let result of results) {
//         this.sharedApiService.setMovieImageUrl(result);
//       }
//       return results;
//     })
//   );
// }