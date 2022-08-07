import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// eslint-disable-next-line import/no-unresolved
import { AppRoutingModule } from './app-routing.module';
// eslint-disable-next-line import/no-unresolved
import { AppComponent } from './app.component';
// eslint-disable-next-line import/no-unresolved
import { HomepageComponent } from './homepage/homepage.component';
// eslint-disable-next-line import/no-unresolved
import { LoginPageComponent } from './login-page/login-page.component';
// eslint-disable-next-line import/no-unresolved
import { LoginInputComponent } from './login-page/login-input/login-input.component';
// eslint-disable-next-line import/no-unresolved
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    LoginInputComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
