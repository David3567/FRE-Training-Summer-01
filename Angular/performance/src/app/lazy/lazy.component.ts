import { Component, OnInit, Optional } from '@angular/core';
import { EagerService } from '../eager/eager.service';
import { AppService } from '../services/app.service';
import { LazyService } from './lazy.service';

@Component({
  selector: 'app-lazy1',
  providers: [],
  template: `
    <p>lazy works! {{ randomApp }} {{ randomEager }} {{ randomLazy }}</p>
  `,
})
export class LazyComponent implements OnInit {
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
