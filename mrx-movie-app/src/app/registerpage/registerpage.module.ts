import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './registerpage.component';

const routes: Routes = [
  {path: '', component: RegisterpageComponent}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class RegisterpageModule { }
