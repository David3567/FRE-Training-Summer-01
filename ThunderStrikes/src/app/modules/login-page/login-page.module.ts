import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

const routes: Routes = [
  { path: "", component: LoginComponent },
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService
  ],
})
export class LoginPageModule { }
