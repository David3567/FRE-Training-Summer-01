import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  movie$!: Observable<any>;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movie$ = this.movieService.movies$;
  }

  getData() {
    for (let i = 0; i < 20; i++) {
      this.movieService.getMovies().subscribe(console.log);
    }
    console.log('This is from initialize: ', this.movie$);
  }
}
