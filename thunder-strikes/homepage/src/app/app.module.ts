import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HeaderComponent } from './welcome-screen/header/header.component';
import { NowPlayingComponent } from './welcome-screen/now-playing/now-playing.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MarketingStuffComponent } from './marketing-stuff/marketing-stuff.component';
import { MarketingService } from './marketing-stuff/services/marketing.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    NowPlayingComponent,
    MainContentComponent,
    MarketingStuffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [MarketingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
