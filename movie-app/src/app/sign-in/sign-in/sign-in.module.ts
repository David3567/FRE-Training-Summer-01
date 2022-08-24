import { NgModule } from '@angular/core';
import { SignInComponent } from '../sign-in.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class SignInModule { }
