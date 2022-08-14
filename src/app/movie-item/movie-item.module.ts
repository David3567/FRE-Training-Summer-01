import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieItemRoutingModule } from './movie-item-routing.module';
import { Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: MovieItemComponent,
  },
];

@NgModule({
  declarations: [MovieItemComponent],
  imports: [CommonModule, MovieItemRoutingModule],
})
export class MovieItemModule {}
