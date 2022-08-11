import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  id!: string;
  sub = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // const { id } = this.activatedRoute.snapshot.params;
    // let products = this.productService.getProducts();
    // this.product = products.find((p) => +p.productID === +id) as Product;
    // this.sub = this.activatedRoute.paramMap.subscribe((params: any) => {
    //   console.log(params);
    //   this.id = params.get('id');
    //   let products = this.productService.getProducts();
    //   this.product = products.find((p) => +p.productID === +this.id) as Product;
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['product']);
  }
}
