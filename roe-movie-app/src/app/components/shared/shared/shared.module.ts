import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'
import { HeaderTopComponent } from '../header/header-top/header-top.component'
import { HeaderBannerComponent } from '../header/header-banner/header-banner.component'
import { HeaderBannerContentComponent } from '../header/header-banner-content/header-banner-content.component'



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBannerComponent,
    HeaderBannerContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  bootstrap:[],
  exports:[FooterComponent, HeaderComponent, HeaderTopComponent, HeaderBannerComponent, HeaderBannerContentComponent]
})
export class SharedModule { }
