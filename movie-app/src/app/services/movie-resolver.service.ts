import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MovieService} from '../services/movie.service';
import { forkJoin } from 'rxjs';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolverService implements Resolve<any> {
  apiKey?: any;
  authData: any;
  jwtToken: any;
  constructor(private movieService: MovieService,
    private userService: UserService) {}
  getApiKey(){
    if (localStorage.getItem('currentUser') !== null) {
      this.jwtToken = localStorage.getItem('currentUser');
      this.authData = jwt_decode(this.jwtToken);
      this.userService.userAuthSubject$.next(this.authData);
      this.apiKey = this.authData.tmdb_key;
      this.movieService.getApi(this.apiKey);
    } else {
      console.log(false);
    }
    return this.apiKey;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Movie List in resolver...', route);
    const movieList = this.movieService.getMoviesList(this.getApiKey())
    const trendingMovies=this.movieService.getTrendingMovies(this.getApiKey())
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

