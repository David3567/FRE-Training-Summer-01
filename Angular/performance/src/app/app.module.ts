import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackByComponent } from './track-by/track-by.component';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';

export const USE_FAKE = new InjectionToken<boolean>('');

@NgModule({
  declarations: [AppComponent, TrackByComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    LoggerService,
    { provide: USE_FAKE, useValue: true },
    {
      provide: ProductService,
      useFactory: (USE_FAKE: boolean, loggerService: LoggerService) => {
        return USE_FAKE;
      },
      deps: [USE_FAKE, LoggerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
