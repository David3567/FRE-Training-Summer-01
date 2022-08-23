import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../interfaces/movie.interface';
import { User } from '../interfaces/user.interface';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';

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
  trending: any[] = [];
  searchHidden: boolean = true;
  currentUser!: User;
  currentUserRole: "USER" | "ADMIN" | "SUPERUSER" | "GUEST" = "GUEST";

  constructor(
    public sanitize: DomSanitizer,
    private movieService: MovieService,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.movieService.getMoviesList().subscribe((movies: any) => {
      this.bannerMovie = movies[0];
      this.movies = movies.filter((m: any, i: number) => i > 0);
    });

    this.movieService.getTrendingMovies().subscribe((movies: any) => {
      this.trending = movies;
    });

    this.userService.generateToken();

    this.userService.currentUser$.subscribe((user:User) => {
      console.log(user);
      this.movieService.getApi(user.tmdb_key!)
      this.currentUser = user;
      this.currentUserRole = user.role!;
   })
  }

  onWatchTrailer(id: number): void {
    this.showMovie = true;
    this.movieService.getVideoById(id).subscribe((trailer: Video[]) => {
      this.selectedMovieVideo = trailer[0];
    });
  }

  searchTab() {
     this.searchHidden = !this.searchHidden
  }

  logOut() {
    this.userService.signOut();
  }
}
