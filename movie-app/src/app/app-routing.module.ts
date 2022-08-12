import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MoviesLisRoutingModule } from './movies-list/movies-list/movies-routing.module';
import { RegisterPageRoutingModule } from "./register-page/register/register-page-routing.module";
import { SignInRoutingModule } from './sign-in/sign-in/sign-in-routing.module';
import { HomepageRoutingModule } from './components/home-page/homepage/homepage-routing.module';
import { SingleMovieComponent } from "./single-movie/single-movie.component";
const routes: Route[] = [
  {
    path: "", redirectTo:"/homepage",  pathMatch:"full"
  },
  {
    path:"single-movie",  component: SingleMovieComponent
  },
  // {
  //   path: "homepage", component: HomePageComponent
  // },
  {
    path:"**", component: PageNotFoundComponent
  }
]
@NgModule({
  imports: [
    HomepageRoutingModule,
    RegisterPageRoutingModule,
    SignInRoutingModule,
    MoviesLisRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
