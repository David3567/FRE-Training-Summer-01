import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { debounceTime, fromEvent, of, switchMap } from 'rxjs';
import { RoutingPages } from 'src/app/shared/interfaces/routing-pages.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { SearchMovieService } from 'src/app/shared/services/search-movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  routingPages!: typeof RoutingPages;
  movieList: MovieDetails[] = [];
  @Input() titleSearch: string = "";
  @ViewChild("searchBar", {static: true}) searchBar!: ElementRef;
  constructor(
    private readonly searchMovieService: SearchMovieService, 
    private readonly route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.movieList = this.route.snapshot.data["movieList"];
    if(!this.movieList) this.movieList = [];
    // fromEvent(this.searchBar.nativeElement, "keyup").pipe(
    //   debounceTime(250),
    //   switchMap( (_) => {
    //     if(this.titleSearch.trim() === ""){
    //       this.movieList = [];
    //       return of();
    //     }
    //     return this.searchMovieService.searchMovie(this.titleSearch);
    //   })
    // ).subscribe(movies => {
    //   this.movieList = movies;
    // });
  }

}

