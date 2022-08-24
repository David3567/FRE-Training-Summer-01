import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/**

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
<<<<<<< HEAD
import { UserService } from '../services/user.service';
||||||| 70a84b8
=======
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f

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
    private movieService: MovieService,
    private userService: UserService
  ) {}
  trending: any[] = [];
  searchHidden: boolean = true;
  currentUser!: any;

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
<<<<<<< HEAD
||||||| 70a84b8
      console.log(movies);
=======
      // console.log(movies);
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f
      this.bannerMovie = movies[0];
      this.movies = movies.filter((m: any, i: number) => i > 0);
    });

    this.movieService.getTrendingMovies().subscribe((movies: any) => {
      this.trending = movies;
    });
<<<<<<< HEAD

    this.userService.generateToken();

    this.userService.currentUser$.subscribe(user => {
      console.log(user);
       this.currentUser = user;
   })
||||||| 70a84b8
=======

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
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f
  }

  onWatchTrailer(id: number): void {
    this.showMovie = true;
    this.movieService.getVideoById(id).subscribe((trailer: Video[]) => {
<<<<<<< HEAD
||||||| 70a84b8
      console.log('Watching trailer now...');
      console.dir(trailer);
=======
      // console.log('Watching trailer now...');
      // console.dir(trailer);
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f
      this.selectedMovieVideo = trailer[0];
    });
  }

  //REVIEW: Check it it's needed, otherwise delete it
  searchTab() {
<<<<<<< HEAD
    console.log('H');
     this.searchHidden = !this.searchHidden
||||||| 70a84b8
    console.log('click');
    if (!this.searchHidden) {
      this.searchHidden = !this.searchHidden;
    } else {
      this.searchHidden = !this.searchHidden;
    }
=======
    if (!this.searchHidden) {
      this.searchHidden = !this.searchHidden;
    } else {
      this.searchHidden = !this.searchHidden;
    }
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f
  }

  logOut() {
    this.userService.signOut();
  }
}
*/
