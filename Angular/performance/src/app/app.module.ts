import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackByComponent } from './track-by/track-by.component';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';
import { FakeProductService } from './services/fake-product.service';
import { HelloComponent } from './hello/hello.component';
import { EagerModule } from './eager/eager.module';

export const USE_FAKE = new InjectionToken<boolean>('');

@NgModule({
  declarations: [AppComponent, TrackByComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, EagerModule],
  providers: [
    LoggerService,
    { provide: USE_FAKE, useValue: false },
    {
      provide: ProductService,
      useFactory: (USE_FAKE: boolean, loggerService: LoggerService) => {
        return USE_FAKE
          ? new FakeProductService()
          : new ProductService(loggerService);
      },
      deps: [USE_FAKE, LoggerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
