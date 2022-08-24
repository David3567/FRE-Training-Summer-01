import { Component, OnInit, Input } from '@angular/core';

import { Movie, RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { Observable, of } from 'rxjs';

import { Info } from '../interfaces/search';
import { Router } from '@angular/router';
import { SingleMovieService } from '../services/single-movie.service';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {


  @Input() movie!: Movie;

  constructor(
    private router: Router,
    private singleMovieService: SingleMovieService
  ) {}

  ngOnInit(): void {}


  onClickPlay() {
    this.router.navigate(['single-movie']);
    this.singleMovieService.sendMovie(this.movie);
  }}
