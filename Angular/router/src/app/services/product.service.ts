import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
  ];

  public getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(2500));
  }

  public getProduct(id: number): Observable<any> {
    const Product = this.products.find((i) => i.productID == id);
    return of(Product).pipe(delay(2500));
  }
}

export class Product {
  constructor(
    public productID: number,
    public name: string,
    public price: number
  ) {}
}
