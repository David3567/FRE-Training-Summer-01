import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ShortTitlePipe } from './pipes/short-title.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: MovieDashboardComponent },
];
@NgModule({
  declarations: [
    MovieDashboardComponent,
    MovieCardComponent,
    ShortTitlePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class MovieDashboardModule { }
