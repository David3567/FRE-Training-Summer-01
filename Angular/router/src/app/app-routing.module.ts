import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductParamComponent } from './components/product-param/product-param.component';
import { ProductComponent } from './pages/product/product/product.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { UserComponent } from './components/user/user.component';
import { ProductGuard } from './services/product.guard';
import { Product1Component } from './product1/product1.component';
import { Product1DetailComponent } from './product1-detail/product1-detail.component';
import { Product2Component } from './product2/product2.component';
import { ProductlistResolverResolver } from './services/productlist-resolver.resolver';
import { Product2DetailComponent } from './product2-detail/product2-detail.component';
import { ProductResolverService } from './services/product-resolver.service';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },

  { path: 'product1', component: Product1Component },
  { path: 'product1/:id', component: Product1DetailComponent },

  {
    path: 'product2',
    component: Product2Component,
    resolve: { products: ProductlistResolverResolver },
  },
  {
    path: 'product2/:id',
    component: Product2DetailComponent,
    resolve: { product: ProductResolverService },
  },

  {
    path: 'static',
    component: StaticComponent,
    data: { id: '23', name: 'Angular' },
  },
  // { path: 'product', component: ProductComponent },
  // { path: 'product/:id', component: ProductDetailComponent },
  // {
  //   path: 'product',
  //   component: ContactComponent,
  //   children: [
  //     // child route
  //     // { path: '', component: ProductComponent },
  //     { path: ':id', component: ProductDetailComponent },
  //   ],
  // },
  {
    path: 'product-param',
    component: ProductParamComponent,
    // canActivate: [ProductGuard],
    // canLoad: [ProductLoadGuard]
  },

  {
    path: 'user',
    component: UserComponent,
    outlet: 'secondary',
  },
  {
    path: 'superuser',
    component: SuperuserComponent,
    outlet: 'secondary',
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
