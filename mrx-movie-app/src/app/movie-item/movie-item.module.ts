import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item.component';
import { RouterModule, Routes } from '@angular/router';
import {YouTubePlayerModule} from '@angular/youtube-player';

const routes: Routes = [
  {path: '', component: MovieItemComponent},
];

@NgModule({
  declarations: [MovieItemComponent],
  imports: [ 
    CommonModule, 
    RouterModule.forChild(routes),
    YouTubePlayerModule 
  ]

})
export class MovieItemModule { }
