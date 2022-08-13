import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualMovieComponent } from './components/individual-movie/individual-movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { HourConversionPipe } from 'src/app/shared/pipes/hour-conversion.pipe';
import { MovieTagsComponent } from './components/movie-tags/movie-tags.component';
import { CastAndCrewComponent } from './components/cast-and-crew/cast-and-crew.component';
import { PosterImageComponent } from 'src/app/shared/components/poster-image/poster-image.component';
import { ActorImageComponent } from 'src/app/shared/components/actor-image/actor-image.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: IndividualMovieComponent },
];

@NgModule({
  declarations: [
    IndividualMovieComponent,
    GenresComponent,
    HourConversionPipe,
    MovieTagsComponent,
    CastAndCrewComponent,
    PosterImageComponent,
    ActorImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})
export class IndividualMovieModule { }
