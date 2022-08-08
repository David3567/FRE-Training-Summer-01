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

import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MoviesListModule } from './movies-list/movies-list/movies-list.module';
import { ShortPipe ,ShortHeaderPipe} from './pipes/short.pipe';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faHome, faSearch, faCalendar, faFilm, faClapperboard } from '@fortawesome/free-solid-svg-icons';

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
    MoviesListComponent,
    ShortPipe ,ShortHeaderPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // MoviesListModule,
    // AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
    FontAwesomeModule
  ],
  exports: [RouterModule, HttpClientModule],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFilm,
      faSquare,
      faCalendar,
      faHome,
      faSearch,
      faClapperboard
    );
  }
}
