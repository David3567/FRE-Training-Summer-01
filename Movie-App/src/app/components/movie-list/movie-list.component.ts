import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDiscover } from '../../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: MovieDiscover[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDiscoverMovies().subscribe(
      (data) => {
        console.log(data);
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

// onScroll(): void {
//     this.movieService
//       .getDiscoverMovies()
//       .subscribe((getPosterPath: movieData[]) => {
//         this.movieData.push(...getPosterPath);
//       });
//   }

  onScroll() {
    this.movieData;
  }
}
