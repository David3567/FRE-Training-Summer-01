import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../home-page/components/homepage/homepage.component';
import { HomePageModule } from '../home-page/home-page.module';
import { LoginComponent } from '../login-page/components/login/login.component';
import { NotFoundPageComponent } from '../page-not-found/not-found-page/not-found-page.component';
import { RegistrationComponent } from '../registration-page/components/registration/registration.component';



const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "register", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  // Uncomment this when the movie list is created.
  // {path: "movie/:id", component: IndividualMovieComponent},
  {path: "**", component: NotFoundPageComponent, pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
