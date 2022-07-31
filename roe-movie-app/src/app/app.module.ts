import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { HeaderTopComponent } from '../header/header-top/header-top.component';
import { HeaderBannerComponent } from '../header/header-banner/header-banner.component'
import { HeaderBannerContentComponent } from '../header/header-banner-content/header-banner-content.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { RegisterComponent } from '../register/register.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  HeaderComponent, HeaderTopComponent,
                  HeaderBannerComponent, HeaderBannerContentComponent, FooterComponent, MainComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
