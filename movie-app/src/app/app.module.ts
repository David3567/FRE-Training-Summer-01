import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelBannerComponent } from './components/home-page/wel-banner/wel-banner.component';
import { NavHeaderHPComponent } from './components/home-page/nav-header-hp/nav-header-hp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { TestComponent } from './test/test.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    WelBannerComponent,
    NavHeaderHPComponent,
    HomePageComponent,
    SignInComponent,
    RegisterPageComponent,
    PageNotFoundComponent,
    TestComponent,
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  exports: [RouterModule, HttpClientModule],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
