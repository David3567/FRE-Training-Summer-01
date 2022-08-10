import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductParamComponent } from './components/product-param/product-param.component';
import { UserComponent } from './components/user/user.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductParamComponent,
    ProductParamComponent,
    UserComponent,
    SuperuserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
