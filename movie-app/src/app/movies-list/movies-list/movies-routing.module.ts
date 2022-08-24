import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MovieCardComponent } from 'src/app/movie-card/movie-card.component';
import { MovieListResolverService } from 'src/app/services/movie-resolver.service';
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
    resolve: {
      movieList: MovieListResolverService,
    },

  },
  {
    path: 'movie-card',
    canActivate: [AuthGuard], 
    component: MovieCardComponent,
    loadChildren: () =>
      import('./movies-list.module').then((m) => m.MoviesListModule),

  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesLisRoutingModule { }
