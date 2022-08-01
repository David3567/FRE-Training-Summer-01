import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelBannerComponent } from './components/home-page/wel-banner/wel-banner.component';
import { NavHeaderHPComponent } from './components/home-page/nav-header-hp/nav-header-hp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    WelBannerComponent,
    NavHeaderHPComponent,
    HomePageComponent,
    SignInComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
