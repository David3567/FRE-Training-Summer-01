import { Component, OnInit ,Input} from '@angular/core';
import { RootObject } from '../interfaces/movie.interface';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie!: RootObject;
  constructor( ) {
    
   }

  ngOnInit(): void {
    
  }

}
