import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieItemGuard } from './movie-item/movie-item.guard';
import { MovieListGuard } from './movies-list/movie-list.guard';

const routes: Routes = [
  {
    path: 'movies',
    canActivate: [MovieListGuard],
    loadChildren: () =>
      import('./movies-list/movies-list.module').then(
        (m) => m.MoviesListModule
      ),
  },
  {
    path: 'user-update',
    loadChildren: () =>
      import('./user-update/user-update.module').then(
        (m) => m.UserUpdateModule
      ),
  },
  {
    path: 'movies/:id',
    canActivate: [MovieItemGuard],
    loadChildren: () =>
      import('./movie-item/movie-item.module').then((m) => m.MovieItemModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
