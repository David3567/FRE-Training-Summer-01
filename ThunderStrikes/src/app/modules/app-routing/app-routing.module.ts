import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RoutingPages } from 'src/app/shared/interfaces/routing-pages.interface';
import { HomepageComponent } from '../home-page/components/homepage/homepage.component';
import { IndividualMovieComponent } from '../individual-movie/components/individual-movie/individual-movie.component';
import { LoginComponent } from '../login-page/components/login/login.component';
import { MovieDashboardComponent } from '../movie-dashboard/components/movie-dashboard/movie-dashboard.component';
import { NotFoundPageComponent } from '../page-not-found/components/not-found-page/not-found-page.component';
import { RegistrationComponent } from '../registration-page/components/registration/registration.component';


const routes: Routes = [
  {path: RoutingPages.Home, component: HomepageComponent},
  {path: RoutingPages.Register, component: RegistrationComponent},
  {path: RoutingPages.Login, component: LoginComponent},
  {path: RoutingPages.Movie, component: IndividualMovieComponent},
  {path: RoutingPages.MovieDashboard, component: MovieDashboardComponent},
  {path: RoutingPages.NotFound, component: NotFoundPageComponent, pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
