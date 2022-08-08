import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from '../home-page/home-page.module';
import { IndividualMovieModule } from '../individual-movie/individual-movie.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    IndividualMovieModule,
  ]
})
export class AppModulesModule { }
