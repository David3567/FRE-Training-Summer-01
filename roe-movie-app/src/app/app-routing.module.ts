import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/core/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./components/core/home/home.module').then(m => m.HomeModule) },
  { path: 'register', loadChildren: () => import('./components/core/register/register.module').then(m => m.RegisterModule) },
  { path: 'register/:email', loadChildren: () => import('./components/core/register/register.module').then(m => m.RegisterModule) },
  { path: 'signin', loadChildren: () => import('./components/core/signin/signin.module').then(m => m.SigninModule) },
  { path: 'movielist', loadChildren: () => import('./components/core/movielist/movielist.module').then(m => m.MovielistModule) },
  {path: '**', loadChildren:() => import('./components/core/home/home.module').then(m => m.HomeModule)  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
