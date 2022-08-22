import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list.component';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { ShortPipe } from '../../pipes/short.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscoverListComponent } from 'src/app/discover-list/discover-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ShortPipe,
    MovieCardComponent,
    MoviesListComponent,
    DiscoverListComponent,
  ],
  imports: [
    InfiniteScrollModule,
    SharedModule
  ],
})
export class MoviesListModule {}
