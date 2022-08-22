import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
