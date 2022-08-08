import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  //movies$!: Observable<any>;
  constructor(private readonly movieService: MovieService) { }

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe()
    // this.movies$ = this.movieService.movies$;
    // console.log(this.movies$ = this.movieService.movies$);
        
  }

}
