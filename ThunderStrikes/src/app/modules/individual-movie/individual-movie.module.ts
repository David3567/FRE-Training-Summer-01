import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualMovieComponent } from './components/individual-movie/individual-movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { HourConversionPipe } from 'src/app/shared/pipes/hour-conversion.pipe';
import { MovieTagsComponent } from './components/movie-tags/movie-tags.component';
import { CastAndCrewComponent } from './components/cast-and-crew/cast-and-crew.component';


@NgModule({
  declarations: [
    IndividualMovieComponent,
    GenresComponent,
    HourConversionPipe,
    MovieTagsComponent,
    CastAndCrewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndividualMovieModule { }
