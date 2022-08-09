import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ShortTitlePipe } from './pipes/short-title.pipe';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  declarations: [
    MovieDashboardComponent,
    MovieCardComponent,
    ShortTitlePipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MovieDashboardModule { }
