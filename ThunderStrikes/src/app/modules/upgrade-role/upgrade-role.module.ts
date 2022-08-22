import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.services';
import { UpgradeRoleComponent } from './upgrade-role.component';

const routes: Routes = [
  { path: "", component: UpgradeRoleComponent },
];

@NgModule({
  declarations: [
    UpgradeRoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
})
export class UpgradeRoleModule { }