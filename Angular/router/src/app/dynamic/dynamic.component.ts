import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent implements OnInit {
  product: any;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {
    console.log(
      'currentNavigation: ',
      this.router.getCurrentNavigation()?.extras.state
    );
    console.log(this.router.getCurrentNavigation());
  }

  ngOnInit() {
    this.spinnerService.setspinner(false);

    console.log('history: ', history.state);
    this.product = history.state;

    // console.log(
    //   'currentNavigation in ngOnInit: ',
    //   this.router.getCurrentNavigation()?.extras.state
    // );

    // console.log('ngoninit: ', this.router.getCurrentNavigation());
  }
}
