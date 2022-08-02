import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from '../home-page/components/welcome-banner/welcome-banner.component';
import { MarketingSalePointsComponent } from '../home-page/components/marketing-sale-points/marketing-sale-points.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';



@NgModule({
  declarations: [
    WelcomeBannerComponent,
    MarketingSalePointsComponent,
    HomepageComponent,
    NowPlayingMoviesComponent,
    WelcomeHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomePageModule { }
