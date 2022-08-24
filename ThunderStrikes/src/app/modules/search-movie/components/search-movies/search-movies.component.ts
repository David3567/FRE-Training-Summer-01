import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, fromEvent, tap } from 'rxjs';
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
    private readonly route: ActivatedRoute,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    // fix not refreshing bug
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.movieList = this.route.snapshot.data["movieList"];
    if(!this.movieList) this.movieList = [];
    const searchInputStream = fromEvent(this.searchBar.nativeElement, "keyup").pipe(
      <any>filter((e:KeyboardEvent) => e.code === "Enter"),
      tap((_) => {
        if(this.titleSearch.trim() === ""){
          this.movieList = [];
        }
        this.router.navigate(['/search',this.titleSearch]);
      })
    ).subscribe()
  }

}

