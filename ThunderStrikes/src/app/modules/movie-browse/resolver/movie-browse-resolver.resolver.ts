import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { debounce, debounceTime, Observable, of } from 'rxjs';
import { MovieDetails } from '../../../shared/interfaces/tmdb.interface';
import { MovieDiscoverService } from '../../../shared/services/movie-discover.service';

@Injectable({
  providedIn: 'root'
})
export class MovieBrowseResolverResolver implements Resolve<MovieDetails[]> {
  constructor(private readonly movieDiscoverService:MovieDiscoverService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails[]> {
    return this.movieDiscoverService.getMovies(1);
  }
}
