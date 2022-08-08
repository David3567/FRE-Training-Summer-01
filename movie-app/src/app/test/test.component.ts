import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie, RootObject } from './../interfaces/movie.interface';

import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';

import {MovieCardComponent} from '../movie-card/movie-card.component'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  movie$!: Observable<any>;
  form!: FormGroup;

  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movie$ = this.movieService.movies$;

    this.form = this.fb.group({
      inputbox: [''],
    });
    this.form
      .get('inputbox')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((val) => {
          return this.movieService.searchMovies(val);
        })
      )
      .subscribe(console.log);
  }

  getData(): void {
    for (let i = 0; i < 20; i++) {
      this.movieService.getMovies().subscribe(console.log);
      this.movieService.getMovieList().subscribe(console.log);

    }
  }
}
