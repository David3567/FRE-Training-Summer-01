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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MoviesListModule } from './movies-list/movies-list/movies-list.module';
import { ShortPipe } from './pipes/short.pipe';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faSquare,
  faHome,
  faSearch,
  faCalendar,
  faFilm,
  faClapperboard,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { SearchService } from './services/search.service';

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
    MoviesListComponent,
    TestComponent,
    ShortPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],

  exports: [RouterModule, HttpClientModule],
  providers: [MovieService, UserService, SearchService],

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
      faClapperboard,
      faEye
    );
  }
}
