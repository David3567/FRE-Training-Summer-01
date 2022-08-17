import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieModuleComponent } from './movie-module.component';


const routes: Routes = [
  { path: '', component: MovieModuleComponent }
];

@NgModule({
  declarations: [
    MovieModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModuleModule { }
