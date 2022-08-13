import { Component, OnInit, Optional } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'performance';
  randomApp = 'App : Not defined';
  randomEager = 'Eager : Not defined';
  randomLazy = 'Lazy : Not defined';

  constructor(
    private readonly productService: ProductService,
    @Optional() private readonly appService: AppService,
    @Optional() private readonly eagerService: EagerService,
    @Optional() private readonly laztyService: LazyService
  ) {}

  ngOnInit(): void {
    console.log(this.productService.getProducts());

    if (this.appService) {
      this.randomApp = this.appService.RandomNo;
    }
    if (this.eagerService) {
      this.randomEager = this.eagerService.RandomNo;
    }
    if (this.laztyService) {
      this.randomLazy = this.laztyService.RandomNo;
    }
  }
}
