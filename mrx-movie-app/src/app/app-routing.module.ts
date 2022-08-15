import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomepageComponent } from './homepage/homepage.component';
// import { LoginpageComponent } from './loginpage/loginpage.component';
// import { MovieListComponent } from './movie-list/movie-list.component';
// import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./loginpage/loginpage.module').then((m) => m.LoginpageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./registerpage/registerpage.module').then((m) => m.RegisterpageModule)
  },
  {
    path: 'movie-list',
    loadChildren: () => import('./movie-list/movie-list.module').then((m) => m.MovieListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
