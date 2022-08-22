import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie, MovieDiscover, MovieDiscoverList } from '../../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: MovieDiscover[] = [];
  moviePage: Movie[] = []
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().subscribe(
      (data) => {
        this.movieData = data.results;
        console.log(this.movieData);

      },
      (error) => {
        console.error('Request failed with error');
      },
      () => {
        console.log('Request completed');
      }
    );
  }

  getPosterPath(api_path: string) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${api_path}`;
  }

  onScroll(): void {
      this.movieService
        .getMorePages()
        .subscribe((movieData) => {
          this.moviePage.push(movieData)
          console.log(this.moviePage);
        });
    }

  // onScroll() {
  //   let moviePage = 'https://api.themoviedb.org/3/discover/movie?api_key=3b12cfa2e8e41ce85be82944f8b7e697'
  //   console.log(moviePage);
  //   this.moviePage.push(...this.movieData)

  //   //   this.movieService.PagesUrl().subscribe((moviePage: any) => {
  //   //   this.moviePage.push(...moviePage)
  //   // })

  // }
}
