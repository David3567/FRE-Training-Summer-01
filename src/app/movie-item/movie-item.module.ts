import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieItemRoutingModule } from './movie-item-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [MovieItemComponent, YoutubePlayerComponent],
  imports: [CommonModule, MovieItemRoutingModule, YouTubePlayerModule],
})
export class MovieItemModule {}
