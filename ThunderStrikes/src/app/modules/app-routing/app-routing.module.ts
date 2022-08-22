import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../home-page/components/homepage/homepage.component';
import { MovieBrowseResolverResolver } from '../movie-browse/resolver/movie-browse-resolver.resolver';

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
    loadChildren: () => import('../individual-movie/individual-movie.module').then(m => m.IndividualMovieModule)
  },
  {
    path: "movie-dashboard",
    loadChildren: () => import('../movie-dashboard/movie-dashboard.module').then(m => m.MovieDashboardModule)
  },
  
  {
    path: "movie-browse", 
    loadChildren: () => import('../movie-browse/movie-browse.module').then(m => m.MovieBrowseModule),
    resolve: {movies: MovieBrowseResolverResolver}
  },
  {
    path: "search",
    loadChildren: () => import('../search-movie/search-movie.module').then(m => m.SearchMovieModule)
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
  exports: [RouterModule],
})
export class AppRoutingModule { }
