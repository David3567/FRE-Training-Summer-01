import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RawMovie, RootVideo } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly api_key = 'a3aca7803e3483b603d87731babf7690';
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly imgBaseUrl = 'https://image.tmdb.org/t/p/original';
  private page: number = 0;
  movieId: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    // console.log(this.activateRoute);
    // this.movieId = this.activateRoute.snapshot.params;
  }

  getMovie() {
    this.page++;
    return this.http
      .get<RawMovie>(`${this.baseUrl}/trending/movie/week`, {
        params: { api_key: this.api_key, page: this.page },
      })
      .pipe(
        map((data) => {
          return data.results.map((result) => {
            return {
              id: result.id,
              title: result.title,
              posterUrl: this.imgBaseUrl + result.poster_path,
              releaseDate: result.release_date,
              score: result.vote_average,
              voteCount: result.vote_count,
              adult: result.adult,
              originalLanguage: result.original_language,
              originalTitle: result.original_title,
              popularity: result.popularity,
              backdrop_path: this.imgBaseUrl + result.backdrop_path,
              mediaType: result.media_type,
              video: result.video,
              genreId: result.genre_ids,
              overview: result.overview,
            };
          });
        })
      );
  }

  getVideo(movieId: string) {
    // this.movieId = '718789';
    return this.http
      .get<RootVideo>(`${this.baseUrl}/movie/${movieId}/videos`, {
        params: { api_key: this.api_key },
      })
      .pipe(
        map((data) => {
          return data.results.map((result) => {
            return {
              // movieName: result.name,
              // type: result.type,
              key: result.key,
            };
          });
        })
      );
  }

  // searchMovie(movieId: string) {
  //   this.http.get<any>(`${this.baseUrl}/movie/${movieId}`, {
  //     params: { api_key: 'a3aca7803e3483b603d87731babf7690' },
  //   });
  // }
}
