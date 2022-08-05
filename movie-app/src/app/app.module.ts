import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { MovieService } from './services/movie.service';
import { TestComponent } from './test/test.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
