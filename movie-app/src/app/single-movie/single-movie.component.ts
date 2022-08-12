import { Component, OnInit } from '@angular/core';
import { SingleMovieService } from '../services/single-movie.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie:any
  constructor( private singleMovieService: SingleMovieService) { }

  ngOnInit(): void {
    this.singleMovieService.single_moive$.subscribe(movie => {
      this.movie = movie;
    })
    console.log(this.movie);
  }

}
