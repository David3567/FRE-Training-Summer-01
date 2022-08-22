import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AdminGuard } from './guards/admin.guard';
import { UserUpdateComponent } from './components/user-update/user-update.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register-routing.module').then(
        (m) => m.RegisterRoutingModule
      ),
  },
  {
    path: 'user-update',
    component: UserUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: MovieListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    children: [
      {
        path: 'movies/:id',
        component: MovieDetailsComponent,
        canActivate: [AdminGuard],
      },
    ],
  },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
