import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieDiscover, MovieDiscoverList } from '../../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: MovieDiscover[] = []
  movie: any
  page: number = 1


  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().subscribe(
      (data) => {
        this.movieData = data.results;
        console.log(this.movieData)
      },
      (_error) => {
        console.error('Request failed with error');
      }
    ),
    this.movieService.getMorePages(this.page).subscribe((data) => {
      this.movie = data
      console.log(this.movie);
    })
  }

  getPosterPath(api_path: string) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${api_path}`;
  }

  getMovies(page: number){
    this.page++
    return (`https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&${page}`)
  }

  // onScroll() {
  //   // let moviePage = 'https://api.themoviedb.org/3/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697'
  //   // console.log(moviePage);
  //   // this.movie.push(...this.movieData)
  //   // console.log(this.movieData);

  //   this.movie
  //     // this.movieService.getMorePages().subscribe((movie) => {
  //     // this.movie.push(...this.movieData)
  //     // console.log(this.movie);

  // // })
  //   }

  onScroll(){
    // let moviePage = 'https://api.themoviedb.org/3/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697'
    // console.log(moviePage);
    console.log(this.getMovies(this.page));

    this.movieData
  }

  }

