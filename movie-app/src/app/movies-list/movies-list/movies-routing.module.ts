import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MovieCardComponent } from 'src/app/movie-card/movie-card.component';
import { MoviesListComponent } from '../movies-list.component';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthorizedUserGuard } from '../../guards/authorized-user.guard';

const routes: Route[] = [
  {
    path: 'movies-list',
    component: MoviesListComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./movies-list.module').then((m) => m.MoviesListModule),
  },
  {
    path: 'movie-card',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./movies-list.module').then((m) => m.MoviesListModule),
    component: MovieCardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesLisRoutingModule {}
