import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Movie, RootObject } from './interface/movie.interface'
import { Videos, TrailerVideos } from "./interface/videos.interface";
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private apiKey = '5fa0925a4c1bf9781d30e90efd4e99ee';
  private apiKey = this.auth.getApiKey();
  private baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`;
  private baseUrlScroll = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=`;

  private movies: Movie[] = [];
  private moviesSubject$ = new BehaviorSubject(this.movies);
  movies$ = this.moviesSubject$.asObservable();
  
  constructor(private http: HttpClient, private auth: AuthService) { }

  getMovies(){
    return this.http.get(this.baseUrl).pipe(
      <any>tap(({ results }: RootObject)=>{
        // console.log(results);
        this.movies = results.map((result)=>{
          return{
            id :result.id,
            title: result.title,
            description: result.overview,
            image: result.poster_path,
            date: result.release_date
          }
        })
        this.moviesSubject$.next(this.movies)
      })
    )
  }

  getMoviesScroll(page: number){
    return this.http.get(this.baseUrlScroll + '' + page).pipe(
      take(1),
      <any>tap(({ results }: RootObject)=>{
        // console.log(results);
        let tempMovie = results.map<Movie>((result)=>{
          return{
            id :result.id,
            title: result.title,
            description: result.overview,
            image: result.poster_path,
            date: result.release_date
          }
        })
        this.movies.push(...tempMovie);
        this.moviesSubject$.next(this.movies )
      })
    )
  }

  getMovieItem(id: string) {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`
    return this.http.get(url).pipe(
      take(1),
      <any>map((trailerVideos: TrailerVideos)=>{
        let videos: Videos[] = trailerVideos.results;
        return videos[0].key
      })
    )
  }
}
