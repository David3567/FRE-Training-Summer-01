import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<any>{

  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const page = route.params['page'];
    let date = new Date().toISOString().split('T')[0];

    return forkJoin([
      this.moviesService.getMovies(page),
      this.moviesService.getUpcoming(date, page),
    ]).pipe(
      map((res: any) => {
        console.log('Movie List Resolver');
        return {
          movies: res[0],
          upcomings: res[1],
        };
      }))
  }
}