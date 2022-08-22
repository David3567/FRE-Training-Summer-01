import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { RegisterpageComponent } from './registerpage/registerpage.component';
// import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
// import { MovieListComponent } from './movie-list/movie-list.component';
// import { TrimStringPipe } from './trim-string.pipe';
import { AuthGuard } from './services/auth.guard';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const BASRURL = new InjectionToken<string>('');
@NgModule({
  declarations: [
    AppComponent,
    // HomepageComponent,
    // RegisterpageComponent,
    // LoginpageComponent,
    NavbarComponent,
    UpgradeComponent,
    // MovieListComponent,
    // TrimStringPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    { provide: BASRURL, useValue: 'http://localhost:4231' },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
