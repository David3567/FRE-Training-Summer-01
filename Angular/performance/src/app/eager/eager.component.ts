import { Component, OnInit, Optional } from '@angular/core';
import { LazyService } from '../lazy/lazy.service';
import { AppService } from '../services/app.service';
import { EagerService } from './eager.service';

@Component({
  selector: 'app-eager',
  providers: [],
  template: `
    <p>eager works! {{ randomApp }} {{ randomEager }} {{ randomLazy }}</p>
  `,
})
export class EagerComponent implements OnInit {
  randomApp = 'App : Not defined';
  randomEager = 'Eager : Not defined';
  randomLazy = 'Lazy : Not defined';

  constructor(
    @Optional() private appService: AppService,
    @Optional() private eagerService: EagerService,
    @Optional() private laztyService: LazyService
  ) {
    if (appService) this.randomApp = this.appService.RandomNo;
    if (eagerService) this.randomEager = this.eagerService.RandomNo;
    if (laztyService) this.randomLazy = this.laztyService.RandomNo;
  }

  ngOnInit() {}
}
