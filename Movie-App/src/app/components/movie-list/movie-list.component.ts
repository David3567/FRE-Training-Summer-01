import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieDiscover, MovieDiscoverList } from '../../movies';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieData: MovieDiscover[] = []
  movie: Movie[] = []
  currentPage$ = new BehaviorSubject<number>(1)

    currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) =>
      this.movieService.getMorePages(currentPage)
    ),
    tap(() => {
      if (this.currentPage$) {
        this.currentPage$.target.complete();
        this.currentPage$ = null;
      }
    })
  );

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
    );
  }

  getPosterPath(api_path: string) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${api_path}`;
  }

  // getPage(){
  //   this.movieService
  //       .getMorePages()
  //       .subscribe((movie) => {
  //         this.movieData.push(...movie)
  //         console.log(movie);

  //       });
  // }

  // onScroll() {
  //   console.log(this.moviePage);

  //     this.getPage.push(...this.movieData)
  //     console.log(this.getPage());

  //   }

    // onScroll(){
    //   this.movieData
    //   console.log(this.movieData);

    // }

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
    this.currentPage$.next(this.currentPage$.value + 1)
    console.log(this.currentPage$);

  }

  }

