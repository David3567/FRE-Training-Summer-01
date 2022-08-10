import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
  ];

  public getProducts() {
    return this.products;
  }

  public getProduct(id: number) {
    return this.products.find((p) => p.productID == id);
  }
}

export class Product {
  productID: number;
  name: string;
  price: number;

  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }
}
