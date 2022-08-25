import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { ShortPipe} from './pipes/short.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthorizedUserGuard } from './guards/not-authorized-user.guard';
import { SharedModule } from './shared/shared.module';
import { AuthorizedUserGuard } from './guards/authorized-user.guard';
import { HomepageModule } from './components/home-page/homepage/homepage.module';
import { faHome, faSearch, faCalendar, faClapperboard, faEye, faCheck, faTimes, faDoorOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from './services/movie.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
export const BASRURL = new InjectionToken<string>('');
export const movieApiUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HomepageModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
  ],
  exports: [RouterModule,

    HttpClientModule],
  providers: [
    MovieService,
    ShortPipe,
    UserService,
    AuthGuard,
    AuthorizedUserGuard,
    NotAuthorizedUserGuard,
    { provide: BASRURL, useValue: 'http://localhost:4231' },
    { provide: movieApiUrl, useValue: 'https://api.themoviedb.org/3' },
    // {
    //   // provide: HTTP_INTERCEPTORS,
    //   // useClass: AuthInterceptor,
    //   // multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    library: FaIconLibrary,
  ) {
    library.addIcons(
      faCalendar, faHome, faSearch,
      faClapperboard,
      faEye,
      faCheck, faTimes,
      faDoorOpen,
      faUser
    );
  }
}
