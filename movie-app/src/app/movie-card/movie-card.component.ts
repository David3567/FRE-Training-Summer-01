import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
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

  ngOnInit(): void {
  }
  onClickPlay() {
    this.singleMovieService.sendMovie(this.movie)
    this.router.navigate(['single-movie'])
  }
}
