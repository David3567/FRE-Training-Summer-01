import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../movie.service';

@Injectable()
export class MovieListResolver implements Resolve<boolean> {
  constructor(private movieService: MovieService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    this.movieService.getMoviesScroll(1).subscribe();

    return this.movieService.movies$;
    
    // return of(true);
  }
}
