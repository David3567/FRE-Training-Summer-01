import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SignInComponent } from '../sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // SignInRoutingModule
  ]
})
export class SignInModule { }
