import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Route[] = [
  {
    path: "", redirectTo:"/homepage",  pathMatch:"full"
  },
  {
    path: "sign-in", component: SignInComponent
  },
  {
    path: "register", component: RegisterPageComponent
  },
  {
    path: "homepage", component: HomePageComponent
  },
  {
    path: "movies-list", component: MoviesListComponent
  },
  {
    path:"**", component: PageNotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
