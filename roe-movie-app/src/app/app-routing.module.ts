import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { SigninComponent } from 'src/signin/signin.component';
import { RegisterComponent } from 'src/register/register.component';
import { MovielistComponent } from '../movielist/movielist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'register/:email', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movielist', component: MovielistComponent},
  {path: '**', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
