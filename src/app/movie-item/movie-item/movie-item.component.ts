import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  movieId: string = '';

  constructor() {}

  ngOnInit() {
    this.movieId = history.state.id;
    console.log(this.movieId);
  }
}
