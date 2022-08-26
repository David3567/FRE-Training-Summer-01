import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user.interface';

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
  currentUser!: User;
  currentUserRole: "USER" | "ADMIN" | "SUPERUSER" | "GUEST" = "GUEST";
  showMembership: boolean = false;
  isMember: boolean = false;

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
    let user = JSON.parse(localStorage.getItem("currentUserInfo")!)
    // this.userService.currentUser$.subscribe((user:User) => {
      this.movieService.getApi(user.tmdb_key!)
      this.currentUser = user;
      this.currentUserRole = user.role!;
    // })

    console.log("Movies list\n", user)
    

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

    // this.userService.generateToken();

    this.userService.currentUser$.subscribe(user => {
      console.log(user);
       this.currentUser = user;
   })

  
}
  onWatchTrailer(id: number): void {
    this.showMovie = true;
    this.movieService.getVideoById(id).subscribe((trailer: Video[]) => {


      this.selectedMovieVideo = trailer[0];
    });
  }

  //REVIEW: Check it it's needed, otherwise delete it
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
  onshowMembership() {
    this.showMembership = true
    console.log(this.showMembership, "this one")
  }
}
