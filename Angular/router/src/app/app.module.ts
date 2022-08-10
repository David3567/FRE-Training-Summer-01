import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { PassparamComponent } from './passparam/passparam.component';
import { ProductParamComponent } from './components/product-param/product-param.component';

@NgModule({
  declarations: [
    AppComponent,
    PassparamComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductParamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
