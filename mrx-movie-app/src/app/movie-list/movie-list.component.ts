import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Movie } from '../interface/movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  movies$!: Observable<Movie[]>;

  currPage: number = 1;

  onScrollSub!: Subscription;


  constructor(public readonly movieService: MovieService) { }

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe();
    this.movieService.getMoviesScroll(this.currPage).subscribe();

    this.movies$ = this.movieService.movies$;

    this.movies$.subscribe((list) => {
      this.movies = list;
    })

    this.onScrollSub = fromEvent(window, 'scroll').pipe()
    .subscribe((e: any) => {
      if (e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop <= (e.target.scrollingElement.clientHeight + 16)) {
        // console.log('hit bottom');
        this.currPage++;
        this.movieService.getMoviesScroll(this.currPage).subscribe();
      }

    });
  }

  ngOnDestroy(): void {
    this.onScrollSub.unsubscribe();
  }

}
