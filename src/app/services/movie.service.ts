import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RootObject } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=a3aca7803e3483b603d87731babf7690';
  private movieObservable$?: Observable<RootObject>;

  constructor(private readonly http: HttpClient) {}

  public getObservable() {
    this.movieObservable$ = this.http.get<RootObject>(this.baseUrl);
    return this.movieObservable$;
  }

  public getMovie() {
    return this.http.get<RootObject>(this.baseUrl).pipe(
      map((data) => {
        return data.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            posterUrl:
              'https://image.tmdb.org/t/p/original' + result.poster_path,
            releaseDate: result.release_date,
            score: result.vote_average,
            voteCount: result.vote_count,
            adult: result.adult,
            originalLanguage: result.original_language,
            originalTitle: result.original_title,
            popularity: result.popularity,
            backdrop_path:
              'https://image.tmdb.org/t/p/original' + result.backdrop_path,
            mediaType: result.media_type,
            video: result.video,
            genreId: result.genre_ids,
            overview: result.overview,
          };
        });
      })
    );
  }
}
