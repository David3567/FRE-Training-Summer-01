import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: LoginpageComponent}
];

@NgModule({
  declarations: [LoginpageComponent],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes) ]
})
export class LoginpageModule { }
