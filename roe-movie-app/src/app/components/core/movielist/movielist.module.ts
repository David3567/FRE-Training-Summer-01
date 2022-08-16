import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { MovielistRoutingModule } from './movielist-routing.module';
import { MovielistComponent } from './movielist.component';
import { SharedModule} from '../../shared/shared/shared.module'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { TrackScrollDirective } from './track-scroll.directive'
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AuthenticationGuard } from './authentication.guard'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
@NgModule({
  declarations: [
    MovielistComponent,
    SidebarComponent,
    MovieDialogComponent,
    TrackScrollDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovielistRoutingModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    InfiniteScrollModule,
    MatDialogModule,
    YouTubePlayerModule
  ],
  entryComponents: [
    MovieDialogComponent
  ],
  providers:[AuthenticationGuard,{provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService],
  exports:[MovieDialogComponent]
})
export class MovielistModule { }
