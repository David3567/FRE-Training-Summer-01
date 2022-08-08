import { Component, OnInit ,Input} from '@angular/core';
import { RootObject } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()movie!: Observable<RootObject>;
  constructor(private movieService: MovieService) {
}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movie: any) => {
      this.movie = of(movie);
    })
  }
}
