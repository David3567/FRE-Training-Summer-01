import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { NavigationBarModule } from './modules/navigation-bar/navigation-bar.module';
import { AppInitializerService } from './shared/services/app-initializer.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    NavigationBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    AppInitializerService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitializerService], multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeApp(initializer: AppInitializerService) {
  return () => initializer.init();
}