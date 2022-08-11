import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
