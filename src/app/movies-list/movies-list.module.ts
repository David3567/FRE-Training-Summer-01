import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { FilterBottonListComponent } from './movies/filter-botton-list/filter-botton-list.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MoviesComponent,
    FilterBottonListComponent,
    MoviesPageComponent,
    SearchBarComponent,
    FeaturedMovieComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    FontAwesomeModule,
    InfiniteScrollModule,
  ],
})
export class MoviesListModule {}
