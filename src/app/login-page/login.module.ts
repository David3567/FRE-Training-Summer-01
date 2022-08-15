import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginInputComponent } from './login-input/login-input.component';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [LoginPageComponent, LoginInputComponent],
  imports: [ReactiveFormsModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}
