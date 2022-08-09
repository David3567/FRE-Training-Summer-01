import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from '../home-page/home-page.module';
import { IndividualMovieModule } from '../individual-movie/individual-movie.module';
import { LoginPageModule } from '../login-page/login-page.module';
import { MovieDashboardModule } from '../movie-dashboard/movie-dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    IndividualMovieModule,
    LoginPageModule,
    MovieDashboardModule,
  ]
})
export class ModuleHandlerModule { }
