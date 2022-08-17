import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginPageComponent } from './login-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    SharedModuleModule,
  ],
})
export class LoginModule {}
