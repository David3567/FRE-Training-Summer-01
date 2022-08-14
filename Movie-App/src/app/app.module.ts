import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieService } from './services/movie.service';

const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MovieListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
