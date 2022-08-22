import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelBannerComponent } from './components/home-page/wel-banner/wel-banner.component';
import { NavHeaderHPComponent } from './components/home-page/nav-header-hp/nav-header-hp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { ShortPipe } from './pipes/short.pipe';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faSearch,
  faCalendar,
  faClapperboard,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

export const BASRURL = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    WelBannerComponent,
    NavHeaderHPComponent,
    HomePageComponent,
    PageNotFoundComponent,
    // ShortPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule, HttpClientModule],
  providers: [
    MovieService,
    ShortPipe,
    UserService,
    { provide: BASRURL, useValue: 'http://localhost:4231' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCalendar, faHome, faSearch, faClapperboard, faEye);
  }
}
