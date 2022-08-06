import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component'
import { HeaderComponent } from '../header/header.component';
import { HeaderTopComponent } from '../header/header-top/header-top.component';
import { HeaderBannerComponent } from '../header/header-banner/header-banner.component'
import { HeaderBannerContentComponent } from '../header/header-banner-content/header-banner-content.component';
import { FooterComponent } from '../home/footer/footer.component';
import { MainComponent } from '../home/main/main.component';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';

import { MatExpansionModule } from '@angular/material/expansion';

import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from '../movielist/movielist.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, MatExpansionModule, ReactiveFormsModule,HttpClientModule],
  declarations: [AppComponent,
    HeaderComponent, HeaderTopComponent,
    HeaderBannerComponent, HeaderBannerContentComponent, FooterComponent, MainComponent, SigninComponent, HomeComponent, RegisterComponent, MovielistComponent],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
