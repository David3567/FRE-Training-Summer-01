import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from './services/authservice.service';
import { Observable } from 'rxjs';

function initializeAppFactory(httpClient: HttpClient): void {
  const token:any = localStorage.getItem('user');
  const userInfo: any = jwt_decode(token);
  let id = userInfo.id;
  let username = userInfo.username;
  let email = userInfo.email;
  let role = userInfo.role;
  let tmdb_key = userInfo.tmdb_key;
  console.log(tmdb_key)
  const url = `http://localhost:4231/auth/refresh-token`;
  setInterval(()=>{return httpClient.post<{ accessToken: string }>(url,{ id, username, email, role, tmdb_key }).subscribe(data=>{localStorage.setItem('user',JSON.stringify(data)); console.log(data)})},600000)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },AuthenticationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: false,
    }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
