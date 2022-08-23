import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
||||||| 70a84b8
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f

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
