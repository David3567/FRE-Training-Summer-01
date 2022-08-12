import { Injectable} from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class SingleMovieService {
  private _single_movie = new BehaviorSubject<any>("");
  readonly single_moive$ = this._single_movie.asObservable();
  constructor() { }

  sendMovie(movie: Movie){
    this._single_movie .next(movie);
  }
}
