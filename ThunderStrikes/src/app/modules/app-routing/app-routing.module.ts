import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../home-page/components/homepage/homepage.component';
import { MovieBrowseResolverResolver } from '../movie-browse/resolver/movie-browse-resolver.resolver';
import { AuthGuard } from 'src/app/shared/services/guards/auth.guard';
import { RoleGuard } from 'src/app/shared/services/guards/role.guard';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "register",
    loadChildren: () => import('../registration-page/registration-page.module').then(m => m.RegistrationPageModule)
  },
  {
    path: "login",
    loadChildren: () => import('../login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: "movie/:id",
    canActivate:[AuthGuard, RoleGuard],
    loadChildren: () => import('../individual-movie/individual-movie.module').then(m => m.IndividualMovieModule)
  },
  {
    path: "movie-dashboard",
    canActivate:[AuthGuard],
    loadChildren: () => import('../movie-dashboard/movie-dashboard.module').then(m => m.MovieDashboardModule)
  },
  
  {
    path: "movie-browse", 
    loadChildren: () => import('../movie-browse/movie-browse.module').then(m => m.MovieBrowseModule),
    resolve: {movies: MovieBrowseResolverResolver},
    canActivate:[AuthGuard],
  },
  {
    path: "search",
    canActivate:[AuthGuard],
    loadChildren: () => import('../search-movie/search-movie.module').then(m => m.SearchMovieModule)
  },
  {
    path: "upgrade-role",
    canActivate:[AuthGuard],
    loadChildren: () => import('../upgrade-role/upgrade-role.module').then(m => m.UpgradeRoleModule)
  },
  {
    path: "**",
    pathMatch: "full",
    loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard, RoleGuard, ], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
