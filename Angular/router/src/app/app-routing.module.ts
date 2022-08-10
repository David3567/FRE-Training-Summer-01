import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductParamComponent } from './components/product-param/product-param.component';
import { ProductComponent } from './components/product/product.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { UserComponent } from './components/user/user.component';
import { ProductGuard } from './services/product.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
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
