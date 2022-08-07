import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie, RootObject } from './interface/movie.interface'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '5fa0925a4c1bf9781d30e90efd4e99ee'
  private baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`
  
  private movies: Movie[] = [];
  private moviesSubject$ = new Subject();
  movies$ = this.moviesSubject$.asObservable();
  
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl).pipe(
      <any>tap(({ results }: RootObject)=>{
        console.log(results);
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
}
