import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelBannerComponent } from './components/home-page/wel-banner/wel-banner.component';
import { NavHeaderHPComponent } from './components/home-page/nav-header-hp/nav-header-hp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieService } from './services/movie.service';
import { TestComponent } from './test/test.component';
<<<<<<< HEAD
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MoviesListModule } from './movies-list/movies-list/movies-list.module';
||||||| 5d4c11c
=======
import { ShortPipe ,ShortHeaderPipe} from './pipes/short.pipe';

>>>>>>> 9d612c7b7e8c20554275cac548491fb516ce3cd6

// const routes: Route[] = [
//   {
//     path: "", redirectTo:"/homepage",  pathMatch:"full"
//   },
//   {
//     path: "sign-in", component: SignInComponent
//   },
//   {
//     path: "register", component: RegisterPageComponent
//   },
//   {
//     path: "homepage", component: HomePageComponent
//   },
//   {
//     path: "movies-list", component: MoviesListComponent
//   },
//   {
//     path:"**", component: PageNotFoundComponent
//   }
// ]
@NgModule({
  declarations: [
    AppComponent,
    WelBannerComponent,
    NavHeaderHPComponent,
    HomePageComponent,
    SignInComponent,
    RegisterPageComponent,
    PageNotFoundComponent,
    MovieCardComponent,
    TestComponent,
<<<<<<< HEAD
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MoviesListModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
||||||| 5d4c11c
=======
    ShortPipe,
    ShortHeaderPipe
>>>>>>> 9d612c7b7e8c20554275cac548491fb516ce3cd6
  ],
<<<<<<< HEAD
  exports: [RouterModule, HttpClientModule],
  providers: [MovieService, UserService],
||||||| 5d4c11c
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [MovieService],
=======

  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [MovieService],
>>>>>>> 9d612c7b7e8c20554275cac548491fb516ce3cd6
  bootstrap: [AppComponent],
})
export class AppModule {}
