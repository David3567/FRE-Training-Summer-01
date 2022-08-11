import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<any> {
  constructor(private router: Router, private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = route.paramMap.get('id');
    if (id) {
      console.log('ProductResolverService  called with ' + id);
      return this.productService.getProduct(+id).pipe(
        map((data) => {
          if (data) {
            console.log(data);
            return data;
          } else {
            console.log('redirecting...');
            this.router.navigate(['/product2']);
            return null;
          }
        })
      );
    }
    return of(new Product(0, '', 0));
  }
}
