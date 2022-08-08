import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MoviesListComponent } from '../movies-list.component';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { ShortPipe } from '../../pipes/short.pipe';
import { BrowserModule } from '@angular/platform-browser';

const routes: Route[] = [
  {
    path: "movies-list", component: MoviesListComponent,
  },
  {
    path: "movie-card", component: MovieCardComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule]
})
export class MoviesListModule { }
