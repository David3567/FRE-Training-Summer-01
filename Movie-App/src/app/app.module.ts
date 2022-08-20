import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieService } from './services/movie.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';

// const appRoutes: Routes = [
//   { path: '', component: HomepageComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: '', loadChildren: () => import('./components/homepage/movie-module.module').then(m => m.MovieModuleModule) },
//   { path: '**', component: ErrorPageComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MovieListComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],

  providers: [MovieService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
