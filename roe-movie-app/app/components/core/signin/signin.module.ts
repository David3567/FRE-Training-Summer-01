import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule} from '../../shared/shared/shared.module'
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    SharedModule,
    MatFormFieldModule
  ]
})
export class SigninModule { }
