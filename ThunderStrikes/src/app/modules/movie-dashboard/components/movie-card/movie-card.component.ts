import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!:MovieDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
