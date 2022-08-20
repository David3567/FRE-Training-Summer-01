import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login-routing.module').then((m) => m.LoginRoutingModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register-routing.module').then((m) => m.RegisterRoutingModule),
  },
  { path: '', component: HomepageComponent,
    canActivate: [AuthGuard] },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
