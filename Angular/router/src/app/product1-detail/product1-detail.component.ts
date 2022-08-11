import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../services/product.service';

@Component({
  templateUrl: './product1-detail.component.html',
})
export class Product1DetailComponent {
  product: Product | undefined;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    let id = this._Activatedroute.snapshot.params['id'];
    console.log(id);
    this._productService.getProduct(id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
