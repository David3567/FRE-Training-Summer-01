import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { RawMovie, RootVideo, MovieVideo } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService implements OnInit {
  private readonly api_key = 'a3aca7803e3483b603d87731babf7690';
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly imgBaseUrl = 'https://image.tmdb.org/t/p/original';
  private page: number = 0;
  movieId: any;

  constructor(private readonly http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    console.log('before auth')
    this.auth.user.subscribe({
      next: x => console.log('on movie', x),
      error: x => console.log(x)
    })
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
    return this.http
      .get<RootVideo>(`${this.baseUrl}/movie/${movieId}/videos`, {
        params: { api_key: this.api_key },
      })
      .pipe(
        // filter((data) => (data.results).type === 'Trailer')
        map((data) => {
          return data.results.filter((movie) => {
            return movie.type === 'Trailer';
          });
        })
      );
  }
}
