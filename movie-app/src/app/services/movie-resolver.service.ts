import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MovieService} from '../services/movie.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolverService implements Resolve<any> {

  constructor(private movieService: MovieService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Movie List in resolver...', route);
    const movieList = this.movieService.getMoviesList()
    const trendingMovies=this.movieService.getTrendingMovies()
    return forkJoin([movieList,trendingMovies])
    .pipe(
        catchError(error => {
          return of('No data');
        })
      );
    // return  this.movieService.getMoviesList().pipe(
    //   catchError(error => {
    //     return of('No data');
    //   })
    // );
 
    
  }
     getMovies(){
      
     }
}
// export class TrendingMovieResolverService implements Resolve<any> {

//   constructor(private movieService: MovieService) {}
//   resolve(route: ActivatedRouteSnapshot): Observable<any> {
//     console.log('Called Get Trending Movies in resolver...', route);
//     return this.movieService.getTrendingMovies().pipe(
//       catchError(error => {
//         return of('No data');
//       })
//     );
//   }
// }

