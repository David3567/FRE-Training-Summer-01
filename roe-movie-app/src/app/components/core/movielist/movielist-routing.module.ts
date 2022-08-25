import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { AuthenticationGuard,  } from '../../../guards/authentication.guard';
import { AuthenticationUserGuard } from '../../../guards/authenticationuser.guard'
import { MovielistUserComponent } from './movielist-user/movielist-user.component'
import { MovieDialogEntryComponent } from '../movie-dialog/movie-dialog-entry/movie-dialog-entry.component';
import { MoviesDialogResolverService } from 'src/app/resolvers/movies-dialog-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MovielistComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: ':movieID',
        component: MovieDialogEntryComponent,
        resolve: { resolvedData: MoviesDialogResolverService }
      }
    ]
  },{
        path: 'movielist_user',
        component: MovielistUserComponent,
        canActivate: [AuthenticationUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MoviesDialogResolverService]
})
export class MovielistRoutingModule {}
