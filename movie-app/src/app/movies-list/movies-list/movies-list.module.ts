import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list.component';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { ShortPipe } from '../../pipes/short.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesLisRoutingModule } from './movies-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ShortPipe,
    MovieCardComponent,
    MoviesListComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
    // MoviesLisRoutingModule,
    // BrowserModule,
  ],
})
export class MoviesListModule { }
