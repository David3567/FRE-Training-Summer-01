import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MovieDetails } from 'src/app/modules/home-page/components/homepage/interfaces/movie-details';
import { MovieOptions, MovieResults } from '../interfaces/tmdb.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  private readonly baseUrl: string = "https://api.themoviedb.org/3/movie/";
  private readonly apiToken: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGY0NGYxZDUyZjk0OTNiNjdkZjQzYWQ2MTk0MWQ0YiIsInN1YiI6IjYyY2ZjNzQ0MGI1ZmQ2MDA1Mzg3OTllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fslcsTZH_p1LHoiIFiOwqUYgkev98ZoFxOg3Epf9mlc";
  private readonly movieCount: number = 6;
  private readonly imageUrlPath: string = "https://image.tmdb.org/t/p/";
  private readonly httpHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.apiToken,
    'Content-Type': 'application/json;charset=utf-8'
  });
  constructor(private readonly httpClient: HttpClient) { }
  getMovie(id: number) {
    return this.httpClient.get([this.baseUrl, id].join(''), {headers: this.httpHeaders});
  }
  getMovieList(option: MovieOptions): Observable<MovieDetails[]>{
    return this.httpClient.get([this.baseUrl, option].join(""), {headers: this.httpHeaders}).pipe(
      <any>map( (data: MovieResults) => {
        let results: MovieDetails[] = data.results;
        if(option === MovieOptions.Now_Playing){
          results = results.slice(0, this.movieCount) as MovieDetails[];
        }
        for(let result of results){
          result.poster_path = this.imageUrlPath + "w500" + result.poster_path;
          result.backdrop_path = this.imageUrlPath + "w1280" + result.backdrop_path;
        }
        return results;
      })
    );
  }
}

