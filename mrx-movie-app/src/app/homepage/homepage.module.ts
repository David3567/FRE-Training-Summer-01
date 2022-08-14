import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [ HomepageComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class HomepageModule { }
