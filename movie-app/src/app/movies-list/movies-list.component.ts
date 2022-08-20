import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  bannerMovie!: any;
  selectedMovieVideo!: Video;
  showMovie: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    public sanitize: DomSanitizer,
    private movieService: MovieService
  ) {}
  trending: any[] = [];
  searchHidden: boolean = true;

  ngOnInit(): void {
    // resolver
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      console.log('PRODUCT FETCHED');
    });

    // Resolver implemented
    this.activatedRoute.data.subscribe((movies: any) => {
     
      this.bannerMovie = movies.movieList[0][0];
      this.movies = movies.movieList[0].filter((m: any, i: number) => i > 0);
      this.trending=movies.movieList[1]
    });

    // this.movieService.getTrendingMovies().subscribe((movies: any) => {
    //   this.trending = movies;
    // });
  }

  onWatchTrailer(id: number): void {
    this.showMovie = true;
    this.movieService.getVideoById(id).subscribe((trailer: Video[]) => {
      console.log('Watching trailer now...');
      console.dir(trailer);
      this.selectedMovieVideo = trailer[0];
    });
  }

  searchTab() {
    console.log('click');
    if (!this.searchHidden) {
      this.searchHidden = !this.searchHidden;
    } else {
      this.searchHidden = !this.searchHidden;
    }
  }
}
