import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  @Input() movie!: MovieDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
