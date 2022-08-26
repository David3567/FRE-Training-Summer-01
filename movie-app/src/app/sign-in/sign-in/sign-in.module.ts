import { NgModule } from '@angular/core';
import { SignInComponent } from '../sign-in.component';

import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [

    SharedModule

  ]
})
export class SignInModule { }
