import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../services/product.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  templateUrl: './product2.component.html',
})
export class Product2Component {
  products: Product[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data['products'];
  }

  ngAfterViewInit(): void {
    this.spinnerService.setspinner(false);
  }
}
