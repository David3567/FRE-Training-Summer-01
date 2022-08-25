import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { forkJoin, map, Observable} from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesDialogResolverService implements Resolve<any>{

  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const movieID = route.params['movieID']

    return forkJoin([
      this.moviesService.getMovieInfo(movieID),
      this.moviesService.getCredits(movieID),
      this.moviesService.getMovieVideos(movieID)
    ]).pipe(
      map((res: any) => {
        console.log('Movie Dialog Resolver');
        return {
          info: res[0],
          credits: res[1],
          videos: res[2]
        };
      }))
  }
}