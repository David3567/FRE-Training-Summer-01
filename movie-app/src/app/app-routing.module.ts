import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MoviesLisRoutingModule } from './movies-list/movies-list/movies-routing.module';
import { RegisterPageRoutingModule } from "./register-page/register/register-page-routing.module";
import { SignInRoutingModule } from './sign-in/sign-in/sign-in-routing.module';
import { HomepageRoutingModule } from './components/home-page/homepage/homepage-routing.module';
import { SingleMovieRoutingModule } from "./single-movie/single-movie/single-movie-routing.module";
import { SubscriptionComponent } from './subscription/subscription.component';
// import { SubscriptionRoutingModule } from './subscription/subscription/subscription-routing.module';

const routes: Route[] = [
  {
    path: "", redirectTo:"/homepage",  pathMatch:"full"
  },
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
    SingleMovieRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
