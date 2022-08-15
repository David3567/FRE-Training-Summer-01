import { Component, OnInit, Input } from '@angular/core';
import { Movie, RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { Observable, of } from 'rxjs';
// <<<<<<< HEAD
import { Info } from '../interfaces/search';
// ||||||| 493ef9c
// =======
import { Router } from '@angular/router';
import {SingleMovieService } from '../services/single-movie.service'
// >>>>>>> feature/Team_KCB/S2A-58-Movie_Item_Page
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
// <<<<<<< HEAD
  @Input() movie!: Movie;

  // constructor() {}
// ||||||| 493ef9c
  // @Input()movie!: Movie;
//   constructor() {

// }
// =======
  // @Input()movie!: Movie;
  constructor(private router: Router,
    private singleMovieService: SingleMovieService) {}
// >>>>>>> feature/Team_KCB/S2A-58-Movie_Item_Page

  ngOnInit(): void {
    console.log(this.movie);
  }
  onClickPlay(){
    this.router.navigate(['single-movie'])
    this.singleMovieService.sendMovie(this.movie)


  }

}
