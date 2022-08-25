import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { TrimStringPipe } from '../trim-string.pipe';
import { MovieListResolver } from '../services/movie-list.resolver';
const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    resolve: { movies: MovieListResolver }
  },
];

@NgModule({
  declarations: [MovieListComponent, TrimStringPipe],
  providers: [MovieListResolver],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class MovieListModule { }
