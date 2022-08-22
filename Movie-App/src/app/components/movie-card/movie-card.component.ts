import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { MovieDiscover } from '../../movies';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieData: MovieDiscover[] = [];
  movie: MovieDiscover[]
  
  
  constructor(private movieService: MovieService) {
    
   }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movieData = data.results;
        console.log(data)
        console.log(this.movieData)
      },
      (error) => {
        console.error('Request failed with error');
      },
      () => {
        console.log('Request completed');
      }
    );
  }

}
