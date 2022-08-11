import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class HomepageModule { }
