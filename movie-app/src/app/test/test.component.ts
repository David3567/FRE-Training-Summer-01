import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie, RootObject } from './../interfaces/movie.interface';

import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';

import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  movie$!: Observable<any>;
  form!: FormGroup;

  searchList$!: Observable<any>;

  constructor(
    private movieService: MovieService,
    private searchService: SearchService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.getData();
    // this.movie$ = this.movieService.movies$;

    this.searchList$ = this.searchService.searchList$;

    console.log(this.searchList$);

    this.form = this.fb.group({
      inputbox: [''],
    });
    this.form
      .get('inputbox')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((val) => {
          return this.searchService.searchMovies(val);
        })
      )
      .subscribe(console.log);
  }

  getData(): void {
    this.movieService.getMovieList().subscribe();
  }
}
