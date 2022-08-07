import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';

@Component({
  selector: 'app-movie-tags',
  templateUrl: './movie-tags.component.html',
  styleUrls: ['./movie-tags.component.scss']
})
export class MovieTagsComponent implements OnInit {
  @Input() movie!: MovieDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
