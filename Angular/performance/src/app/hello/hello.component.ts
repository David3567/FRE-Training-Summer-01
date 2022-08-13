import { Component, OnInit, Optional } from '@angular/core';
import { EagerService } from '../eager/eager.service';
import { LazyService } from '../lazy/lazy.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'hello',
  providers: [],
  template: ` Hello Works {{ randomApp }} {{ randomEager }} {{ randomLazy }} `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent implements OnInit {
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

  ngOnInit(): void {}
}
