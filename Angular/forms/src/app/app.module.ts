import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectAllComponent } from './select-all/select-all.component';
import { DataService } from './data.service';
import { SetValidatorComponent } from './set-validator/set-validator.component';
import { FromArrayComponent } from './from-array/from-array.component';

@NgModule({
  declarations: [AppComponent, SelectAllComponent, SetValidatorComponent, FromArrayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    // {provide: DataService, useClass: DataService},
    {
      provide: 'CheckEmailApi',
      useValue: 'http://localhost:4231/auth/check-email',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
