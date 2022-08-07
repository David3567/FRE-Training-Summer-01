import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { HomepageComponent } from './homepage/homepage.component';
// eslint-disable-next-line import/no-unresolved
import { LoginPageComponent } from './login-page/login-page.component';
// eslint-disable-next-line import/no-unresolved
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
