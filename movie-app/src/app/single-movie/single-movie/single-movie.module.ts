import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import{SingleMovieRouterModule} from '../single-movie-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { SingleMovieComponent } from '../single-movie.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [SingleMovieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],

})
export class SingleMovieModule { }
