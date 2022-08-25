import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item.component';
import { RouterModule, Routes } from '@angular/router';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { MovieItemResolver } from '../services/movie-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieItemComponent,
    resolve: { movie: MovieItemResolver }
  },
];

@NgModule({
  declarations: [MovieItemComponent],
  imports: [ 
    CommonModule, 
    RouterModule.forChild(routes),
    YouTubePlayerModule 
  ],
  providers: [MovieItemResolver]
})
export class MovieItemModule { }
