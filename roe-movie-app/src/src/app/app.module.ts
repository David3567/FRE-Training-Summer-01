import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { HeaderTopComponent } from '../header/header-top/header-top.component';
import { HeaderBannerComponent } from '../header/header-banner/header-banner.component'
import { HeaderBannerContentComponent } from '../header/header-banner-content/header-banner-content.component';
import { Section1Component } from '../main/section1/section1.component';
import { Section2Component } from '../main/section2/section2.component';
import { Section3Component } from '../main/section3/section3.component';
import { Section4Component } from '../main/section4/section4.component';
import { Section5Component } from '../main/section5/section5.component';
import { FooterComponent } from '../footer/footer.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  HeaderComponent, HeaderTopComponent,
                  HeaderBannerComponent, HeaderBannerContentComponent, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
