import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from '../interfaces/movie-details';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() movie!: MovieDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
