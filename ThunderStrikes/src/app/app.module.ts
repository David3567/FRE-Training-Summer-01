import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/home-page/components/homepage/homepage.component';
import { HomePageModule } from './modules/home-page/home-page.module';
const routes: Routes = [
  {path: "", component: HomepageComponent}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomePageModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
