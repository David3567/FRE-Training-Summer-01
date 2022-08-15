import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './registerpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: RegisterpageComponent}
];

@NgModule({
  declarations: [RegisterpageComponent],
  imports: [ CommonModule,FormsModule,
    ReactiveFormsModule, RouterModule.forChild(routes) ]
})
export class RegisterpageModule { }
