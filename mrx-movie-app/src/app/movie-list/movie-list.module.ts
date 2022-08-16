import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { TrimStringPipe } from '../trim-string.pipe';
const routes: Routes = [
  {path: '', component: MovieListComponent},
];

@NgModule({
  declarations: [MovieListComponent, TrimStringPipe],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class MovieListModule { }
