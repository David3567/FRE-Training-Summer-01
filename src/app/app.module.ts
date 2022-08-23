import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { AuthService } from './auth/auth.service';
import { UserUpdateInterceptor } from './interceptors/user-update.interceptor';
export const BASEURL = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    MovieService,
    AuthService,
    { provide: BASEURL, useValue: 'http://localhost:4231' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserUpdateInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
