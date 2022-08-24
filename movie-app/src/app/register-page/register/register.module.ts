import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class RegisterModule { }
