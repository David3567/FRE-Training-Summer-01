import { Component, HostListener, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { MovieDiscoverService } from 'src/app/shared/services/movie-discover.service';

@Component({
  selector: 'app-movie-browse',
  templateUrl: './movie-browse.component.html',
  styleUrls: ['./movie-browse.component.scss']
})
export class MovieBrowseComponent implements OnInit {
  private page:number = 1;
  public movies: MovieDetails[] = [];
  constructor(private readonly movieDiscoverService:MovieDiscoverService) { }

  ngOnInit(): void {
    this.movieDiscoverService
      .getMovies(this.page++)
      .subscribe((movies: MovieDetails[]) => {
        this.movies = movies;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any){
  if(event.target.scrollingElement.clientHeight + event.target.scrollingElement.scrollTop >= event.target.scrollingElement.scrollHeight) {
    this.movieDiscoverService
    .getMovies(this.page++)
    .subscribe((movies: MovieDetails[]) => {
      console.log(movies);
      this.movies = [...this.movies, ...movies];
  });
  }
}
}
