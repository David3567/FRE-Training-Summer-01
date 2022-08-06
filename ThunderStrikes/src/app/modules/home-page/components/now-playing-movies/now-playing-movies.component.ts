import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieOptions } from 'src/app/shared/interfaces/tmdb.interface';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';
import { MovieDetails } from '../homepage/interfaces/movie-details';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {

  moviesPlaying$: Observable<MovieDetails[]>;
  constructor(private tmdbService: TmdbApiService) {
    this.moviesPlaying$ = this.tmdbService.getMovieList(MovieOptions.Now_Playing);
  }

  ngOnInit(): void {
  }

}


