import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    SharedModule,

  ]
})
export class RegisterModule { }
