import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieDiscoverList } from '../movies';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<MovieDiscoverList>{

  constructor( private movieService: MovieService) { }

  resolve(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<MovieDiscoverList> | Promise<MovieDiscoverList> | MovieDiscoverList {
    return this.movieService.getDiscoverMovies()
  }
}
