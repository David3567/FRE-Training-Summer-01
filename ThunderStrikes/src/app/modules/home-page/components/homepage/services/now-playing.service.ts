import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  private startUrl: string = 'https://api.themoviedb.org/3/movie/now_playing';
  private middleUrl: string = '?api_key=';
  private apiKey:string = '64f44f1d52f9493b67df43ad61941d4b';
  private endUrl:string = '&language=en-US&page=1';
  private movieCount:number = 6;
  private imageUrlPath:string = 'https://image.tmdb.org/t/p/';
  constructor(private httpClient: HttpClient) {}
  get(): Observable<MovieDetails[]>{
    return this.httpClient.get(this.startUrl + this.middleUrl + this.apiKey + this.endUrl).pipe(
      <any>map( (data: MovieResults) => {
        const results = data.results.slice(0, this.movieCount) as MovieDetails[];
        for(let result of results){
          result.poster_path = this.imageUrlPath + "w500" + result.poster_path;
          result.backdrop_path = this.imageUrlPath + "w1280" + result.backdrop_path;
        }
        return results;
      })
    );
  }
  
}

interface MovieResults{
  results: []
}
