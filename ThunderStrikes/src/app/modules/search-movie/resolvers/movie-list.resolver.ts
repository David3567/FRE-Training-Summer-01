import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { SearchMovieService } from 'src/app/shared/services/search-movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolver implements Resolve<MovieDetails[]> {
  constructor(private readonly searchMovieService: SearchMovieService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails[]> {
    const title:string | null = route.paramMap.get("title");
    const page:string | null = route.paramMap.get("page");
    if(!title) return of([]);
    else return this.searchMovieService.searchMovie(title, page);
  }
}
