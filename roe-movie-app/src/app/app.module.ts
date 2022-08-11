import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,  ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
