import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  bannerMovie!: any;
  trending:any[]=[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies:any) => {
      this.bannerMovie = movies[0]
      this.movies = movies.filter((m:any, i:number) => i > 0);
    });
    
  }
}
