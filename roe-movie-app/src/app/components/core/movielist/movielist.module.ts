import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { MovielistRoutingModule } from './movielist-routing.module';
import { MovielistComponent } from './movielist.component';
import { SharedModule } from '../../shared/shared/shared.module'
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { TrackScrollDirective } from '../../../directives/track-scroll.directive'
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AuthenticationGuard, } from '../../../guards/authentication.guard';
import { AuthenticationUserGuard } from '../../../guards/authenticationuser.guard';
import { MovielistUserComponent } from './movielist-user/movielist-user.component'
import { MoviesDialogResolverService } from 'src/app/resolvers/movies-dialog-resolver.service';

@NgModule({
  declarations: [
    MovielistComponent,
    SidebarComponent,
    MovieDialogComponent,
    TrackScrollDirective,
    MovielistUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovielistRoutingModule,
    SharedModule,
    MatCardModule,
    InfiniteScrollModule,
    MatDialogModule,
    YouTubePlayerModule,
  ],
  entryComponents: [
    MovieDialogComponent
  ],
  providers: [AuthenticationGuard, AuthenticationUserGuard],
  exports: [MovieDialogComponent, MovielistUserComponent]
})
export class MovielistModule { }
