import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Root, Result } from '../app/root';
import {map} from 'rxjs/operators'
import { query } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseURL = "https://api.themoviedb.org/3/discover/movie/"
  private readonly upcominURL="https://api.themoviedb.org/3/movie/upcoming"
  private readonly SearchByTitleURL='https://api.themoviedb.org/3/search/movie/'
  private readonly api_key:string = '6e7a30a6be99643eb9de647bea8a65b1'
  public moveiList$:BehaviorSubject<Object> = new BehaviorSubject({})
  constructor(private http:HttpClient) {
    //this.moveiList$=new BehaviorSubject([''])
   }

  getMovies(){
    return this.http.get(`${this.baseURL}?api_key=${this.api_key}`).pipe(
      map(result=>{this.moveiList$?.next(result); return this.moveiList$.value})
    )
  }

  getUpcoming(date:string){
    return this.http.get(`${this.upcominURL}?primary_release_date.gte=${date}&api_key=${this.api_key}`).pipe(
      map(result=>{this.moveiList$?.next(result); return this.moveiList$.value})
    )
  }

  getByTitle(query:string){
    if(query.trim()!=='')
      return this.http.get(`${this.SearchByTitleURL}?api_key=${this.api_key}&query=${query}`).pipe(
        map(result=>{this.moveiList$?.next(result); return this.moveiList$.value}))
    return this.moveiList$
    }
}
