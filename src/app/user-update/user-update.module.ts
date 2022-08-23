import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUpdateRoutingModule } from './user-update-routing.module';
import { UserUpdatePageComponent } from './user-update-page/user-update-page.component';


@NgModule({
  declarations: [
    UserUpdatePageComponent
  ],
  imports: [
    CommonModule,
    UserUpdateRoutingModule
  ]
})
export class UserUpdateModule { }
