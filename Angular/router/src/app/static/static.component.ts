import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';

@Component({
  templateUrl: './static.component.html',
})
export class StaticComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.setspinner(false);
    this.route.data.subscribe((data) => {
      this.product = data;
      console.log(data);
    });
  }
}
