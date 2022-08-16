import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBrowseComponent } from './components/movie-browse/movie-browse.component';
import { MovieBrowseItemComponent } from './components/movie-browse-item/movie-browse-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

const routes: Routes = [
  {path: "", component: MovieBrowseComponent}
];

@NgModule({
  declarations: [
    MovieBrowseComponent,
    MovieBrowseItemComponent,
    ShortDescriptionPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class MovieBrowseModule { }
