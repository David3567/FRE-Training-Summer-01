import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieOptions } from '../interfaces/movie-options.interface';
import { MovieDetails, MovieResults } from '../interfaces/tmdb.interface';
import { TrailerVideos, Videos } from '../interfaces/trailer-videos';
import { SharedApiDataService } from './shared-api-data.service';
@Injectable({
  providedIn: 'root'
})
export class TmdbApiService implements OnInit {
  private readonly movieCount: number = 6;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly sharedApiService: SharedApiDataService,
  ) { }
  ngOnInit(): void {
  }

  getMovie(id: number | string): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>([this.sharedApiService.baseUrl, Number(id)].join('/'), { headers: this.sharedApiService.httpHeaders });
  }

  getMovieList(option: MovieOptions): Observable<MovieDetails[]> {
    return this.httpClient.get<MovieResults>([this.sharedApiService.baseUrl, option].join("/"), { headers: this.sharedApiService.httpHeaders }).pipe(
      map((data) => {
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
  getVideoTrailers(id: number | string): Observable<Videos[]> {
    return this.httpClient.get<TrailerVideos>([this.sharedApiService.baseUrl, Number(id), "videos"].join('/'), 
    { headers: this.sharedApiService.httpHeaders }).pipe(
      map((trailerVideos) => {
        let videos: Videos[] = trailerVideos.results;
        videos = videos.filter(ele => {
          return ele.type === "Trailer"
        });
        return videos;
      })
    );
  }
}

