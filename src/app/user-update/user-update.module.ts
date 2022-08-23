import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUpdateRoutingModule } from './user-update-routing.module';
import { UserUpdatePageComponent } from './user-update-page/user-update-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserUpdatePageComponent],
  imports: [CommonModule, UserUpdateRoutingModule, ReactiveFormsModule],
})
export class UserUpdateModule {}
