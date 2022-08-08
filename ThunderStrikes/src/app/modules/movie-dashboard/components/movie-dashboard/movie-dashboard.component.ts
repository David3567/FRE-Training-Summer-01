import { Component, OnInit } from '@angular/core';
import { MovieOptions } from 'src/app/shared/interfaces/movie-options.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  public movieLatest!:MovieDetails;
  public movieNowPlaying!:MovieDetails[];
  public moviePopular!:MovieDetails[];
  public movieTopRated!:MovieDetails[];
  public movieUpcoming!:MovieDetails[];

  constructor(private readonly tmdbApiService:TmdbApiService) { }

  ngOnInit(): void {
    // fetch data

    // latest is a single movieDetail.
    // this.tmdbApiService.getMovieList(MovieOptions.Latest).subscribe(data=>{
    //   console.log(data);
    //   this.movieLatest = data;
    // });

    this.tmdbApiService.getMovieList(MovieOptions.Now_Playing).subscribe(data=>{
      this.movieNowPlaying = data;
    });

    this.tmdbApiService.getMovieList(MovieOptions.Popular).subscribe(data=>{
      this.moviePopular = data;
    });

    this.tmdbApiService.getMovieList(MovieOptions.Top_Rated).subscribe(data=>{
      this.movieTopRated = data;
    });

    this.tmdbApiService.getMovieList(MovieOptions.Upcoming).subscribe(data=>{
      this.movieUpcoming = data;
    });


  }

}
