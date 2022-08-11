import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    // HomepageRoutingModule,
    BrowserModule,
    CommonModule
  ]
})
export class HomepageModule { }
