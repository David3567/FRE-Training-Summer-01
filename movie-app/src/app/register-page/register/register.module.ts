import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../register-page.component';
import { ShortPipe } from '../../pipes/short.pipe';

@NgModule({
  declarations: [
    RegisterPageComponent
    // ShortPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
