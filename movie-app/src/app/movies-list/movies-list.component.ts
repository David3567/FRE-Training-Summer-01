import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
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
  seeYou:boolean=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    public sanitize: DomSanitizer,
    private movieService: MovieService,
    private userService: UserService
  ) {}
  trending: any[] = [];
  searchHidden: boolean = true;

  // Api key and other information from localStorage
  apiKey?: any;
  authData: any;
  jwtToken: any;

  // testData: any;

  ngOnInit(): void {
    // this.userService.userAuthObs$.subscribe((userinfo) => {
    //   this.testData = userinfo;
    // });

    if (localStorage.getItem('currentUser') !== null) {
      this.jwtToken = localStorage.getItem('currentUser');
      this.authData = jwt_decode(this.jwtToken);
      this.userService.userAuthSubject$.next(this.authData);
      this.apiKey = this.authData.tmdb_key;
      this.movieService.getApi(this.apiKey);
    } else {
      console.log(false);
    }

    this.movieService.getMoviesList().subscribe((movies: any) => {
      // console.log(movies);
      this.bannerMovie = movies[0];
      this.movies = movies.filter((m: any, i: number) => i > 0);
    });

    this.movieService.getTrendingMovies().subscribe((movies: any) => {
      this.trending = movies;
    });

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
      this.trending = movies.movieList[1];
    });

    // this.movieService.getTrendingMovies().subscribe((movies: any) => {
    //   this.trending = movies;
    // });
  }

  onWatchTrailer(id: number): void {
    this.showMovie = true;
    this.movieService.getVideoById(id).subscribe((trailer: Video[]) => {
      // console.log('Watching trailer now...');
      // console.dir(trailer);
      this.selectedMovieVideo = trailer[0];
    });
  }

  searchTab() {
    if (!this.searchHidden) {
      this.searchHidden = !this.searchHidden;
    } else {
      this.searchHidden = !this.searchHidden;
    }
  }

  logOut() {
    this.seeYou=true
    this.userService.signOut();
  }
  
}
