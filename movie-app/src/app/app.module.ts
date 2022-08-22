import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelBannerComponent } from './components/home-page/wel-banner/wel-banner.component';
import { NavHeaderHPComponent } from './components/home-page/nav-header-hp/nav-header-hp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { ShortPipe} from './pipes/short.pipe';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faCalendar, faClapperboard, faEye, faCheck, faTimeline, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthorizedUserGuard } from './guards/not-authorized-user.guard';
import { SharedModule } from './shared/shared.module';
import { AuthorizedUserGuard } from './guards/authorized-user.guard';
export const BASRURL = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    WelBannerComponent,
    NavHeaderHPComponent,
    HomePageComponent,
    PageNotFoundComponent,
    TestComponent,
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
    AuthGuard,
    AuthorizedUserGuard,
    NotAuthorizedUserGuard,
    { provide: BASRURL, useValue: 'http://localhost:4231' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCalendar, faHome, faSearch,
      faClapperboard,
      faEye,
      faCheck, faTimes
    );
  }
}
