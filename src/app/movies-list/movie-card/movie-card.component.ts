import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MovieList } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  // routerLink = `/movies/` + this.movie.id;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
