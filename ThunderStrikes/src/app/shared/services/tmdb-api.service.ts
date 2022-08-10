import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieOptions } from '../interfaces/movie-options.interface';
import { MovieDetails, MovieResults } from '../interfaces/tmdb.interface';
import { SharedApiDataService } from './shared-api-data.service';
@Injectable({
  providedIn: 'root'
})
export class TmdbApiService implements OnInit{
  private readonly movieCount: number = 6;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly sharedApiService: SharedApiDataService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
  }

  getMovie(id: number | string): Observable<MovieDetails> {
    return this.httpClient.get([this.sharedApiService.baseUrl, Number(id)].join('/'), { headers: this.sharedApiService.httpHeaders }) as Observable<MovieDetails>;
  }

  getMovieList(option: MovieOptions): Observable<MovieDetails[]> {
    return this.httpClient.get([this.sharedApiService.baseUrl, option].join("/"), { headers: this.sharedApiService.httpHeaders }).pipe(
      <any>map((data: MovieResults) => {
        let results: MovieDetails[] = data.results;
        if (option === MovieOptions.Now_Playing) {
          results = results.slice(0, this.movieCount) as MovieDetails[];
        }
        for (let result of results) {
          this.sharedApiService.setMovieImageUrl(result);
        }
        return results;
      })
    );
  }

}

