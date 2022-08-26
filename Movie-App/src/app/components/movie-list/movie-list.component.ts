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
  movie: any[] = []
  bannerMovie!: any
  Number: number


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
    )
    // this.movieService.getMorePages(this.Number).subscribe((movieData) => {
    //   this.movie = movieData.page
    //   console.log(this.movie);
    //   console.log(this.movie, {...movieData});
    // })

    //   this.movieService.getMorePages().subscribe((movies:any) => {
    //   this.bannerMovie = movies[0]
    //   this.movie = movies.filter((m:any, i:number) => i > 0);
    // });
  }


  getPosterPath(api_path: string) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${api_path}`;
  }

  // getMovies(Number: number){
  //   this.Number++
  //   // return (`https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Number}`)
  //   return (`https://api.themoviedb.org/3/list/${Number}?api_key=3b12cfa2e8e41ce85be82944f8b7e697`)
  // }

  onScroll(){
    // let moviePage = 'https://api.themoviedb.org/3/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697'
    // console.log(moviePage);
    this.movie
    console.log(this.movie);
    console.log(this.movie, {...this.movieData});
    this.movieService.getMorePages().subscribe((movie:any) => {
      this.movie = movie.filter((m:any, i:number) => i > 0);
    });
    // .subscribe(data => this.metadata = data)
  }
}

