import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './interfaces/movie-details';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }

}
