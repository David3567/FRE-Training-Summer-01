import { Component, OnInit, Input } from '@angular/core';
import { Movie, RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { Observable, of } from 'rxjs';
import { Info } from '../interfaces/search';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }
}
