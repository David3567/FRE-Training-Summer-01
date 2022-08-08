import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MoviesListComponent } from '../movies-list.component';

const routes: Route[] = [
  {
    path: "movies-list", component: MoviesListComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesListModule { }
