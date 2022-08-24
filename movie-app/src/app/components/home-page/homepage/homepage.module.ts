import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { HomePageComponent } from '../home-page.component';
import { NavHeaderHPComponent } from '../nav-header-hp/nav-header-hp.component';
import { WelBannerComponent } from '../wel-banner/wel-banner.component';


@NgModule({
  declarations: [HomePageComponent, WelBannerComponent,
    NavHeaderHPComponent,],
  exports: [HomePageComponent,NavHeaderHPComponent, WelBannerComponent,],
  imports: [
    SharedModule
  ]
})
export class HomepageModule { }
