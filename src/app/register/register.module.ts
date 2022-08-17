import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [ReactiveFormsModule, CommonModule, RegisterRoutingModule, SharedModuleModule],
})
export class RegisterModule {}
