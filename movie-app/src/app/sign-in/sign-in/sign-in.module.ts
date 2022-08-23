import { NgModule } from '@angular/core';
import { SignInComponent } from '../sign-in.component';
<<<<<<< HEAD
import { SharedModule } from '../../shared/shared.module';
||||||| 70a84b8
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
<<<<<<< HEAD
    SharedModule
||||||| 70a84b8
    ReactiveFormsModule,
    CommonModule,
=======
    ReactiveFormsModule,
    CommonModule,
  
>>>>>>> ec7746c7bb19c2fd54053f6fafe6bda04b32e93f
  ]
})
export class SignInModule { }
