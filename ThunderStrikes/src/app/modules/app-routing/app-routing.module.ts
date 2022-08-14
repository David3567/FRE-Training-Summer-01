import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../home-page/components/homepage/homepage.component';
import { IndividualMovieComponent } from '../individual-movie/components/individual-movie/individual-movie.component';
import { LoginComponent } from '../login-page/components/login/login.component';
import { MovieDashboardComponent } from '../movie-dashboard/components/movie-dashboard/movie-dashboard.component';
import { NotFoundPageComponent } from '../page-not-found/components/not-found-page/not-found-page.component';
import { RegistrationComponent } from '../registration-page/components/registration/registration.component';



const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "register", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "movie/:id", component: IndividualMovieComponent},
  {path: "movie-dashboard", component: MovieDashboardComponent},
  {
    path: "movie-browse", 
    loadChildren: () => 
      import('../movie-browse/movie-browse.module').then(m => m.MovieBrowseModule)
  },
  {path: "**", component: NotFoundPageComponent, pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
