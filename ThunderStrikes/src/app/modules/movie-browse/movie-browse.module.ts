import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBrowseComponent } from './components/movie-browse/movie-browse.component';
import { MovieBrowseItemComponent } from './components/movie-browse-item/movie-browse-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: MovieBrowseComponent}
];

@NgModule({
  declarations: [
    MovieBrowseComponent,
    MovieBrowseItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieBrowseModule { }
