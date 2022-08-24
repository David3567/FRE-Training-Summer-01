import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.services';
import { UpgradeRoleComponent } from './upgrade-role.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/services/auth.interceptor';

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
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class UpgradeRoleModule { }