import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product/product.component';
import { ProductParamComponent } from './components/product-param/product-param.component';
import { UserComponent } from './components/user/user.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './pages/product/product.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { Product2DetailComponent } from './product2-detail/product2-detail.component';
import { Product2Component } from './product2/product2.component';
import { Product1DetailComponent } from './product1-detail/product1-detail.component';
import { Product1Component } from './product1/product1.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    ProductParamComponent,
    UserComponent,
    SuperuserComponent,
    SpinnerComponent,
    Product2DetailComponent,
    Product2Component,
    Product1DetailComponent,
    Product1Component,
    DynamicComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
