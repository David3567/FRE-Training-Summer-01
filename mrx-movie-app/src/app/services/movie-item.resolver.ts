import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieItemResolver implements Resolve<boolean> {

  constructor(private movieService: MovieService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> {
      /**
       * @todo: retrieve id from activated param route
       *      : return getMovieItem obs from movieService
       */
      
      return this.movieService.getMovieItem(""+route.paramMap.get('id'))
      
      // return of(true);
  }
}
