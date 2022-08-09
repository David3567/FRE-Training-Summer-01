import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TrimStringPipe } from './trim-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterpageComponent,
    LoginpageComponent,
    NavbarComponent,
    MovieListComponent,
    TrimStringPipe,
  ],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
