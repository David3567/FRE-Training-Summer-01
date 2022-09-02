import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemotemoduleModule } from './remotemodule/remotemodule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RemotemoduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
