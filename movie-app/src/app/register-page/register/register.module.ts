import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegisterModule { }
