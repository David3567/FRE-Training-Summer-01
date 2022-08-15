import { Component, OnInit } from '@angular/core';
import { SingleMovieService, } from '../services/single-movie.service';
import { Item} from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { Video } from '../interfaces/movie.interface';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie: any
  movieId: number = 0
  selectedMovieVideo!: Video
  showMovie: boolean = false
  constructor(private singleMovieService: SingleMovieService,
    private movieService: MovieService,
    public sanitize: DomSanitizer,
  ) { }

  ngOnInit(): void {

    this.singleMovieService.single_moive$.subscribe(movie => {
      this.movieId = movie.id;
      
    })
    
      if (this.movieId) {
        this.movieService.getSingleMovie(this.movieId).subscribe(movie => 
          {this.movie = movie
          localStorage.setItem('singleMovie', JSON.stringify(this.movie))
          console.log(this.movie)
          });
        
      }
      else {
       
        this.movie = JSON.parse(localStorage.getItem('singleMovie') ?? "")
        console.log(this.movie)
      }


  }

  onWatchTrailer(id: number): void{
    this.showMovie=true
    this.movieService.getVideoById(id)
      .subscribe((trailer: Video[]) => {
      console.log("Watching trailer now...")
        console.dir(trailer);
        this.selectedMovieVideo = trailer[0];
    })
  }

}
