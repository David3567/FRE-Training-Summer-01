import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieItemResolverService implements Resolve<{ key: string }[]> {
  constructor(private tmdb: MovieService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<{ key: string }[]> {
    return this.tmdb.getVideo(route.paramMap.get('id') as string);
  }
}
