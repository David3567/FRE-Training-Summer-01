import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HeaderComponent } from './welcome-screen/header/header.component';
import { NowPlayingComponent } from './welcome-screen/now-playing/now-playing.component';
import { MainContentComponent } from './welcome-screen/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    NowPlayingComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
