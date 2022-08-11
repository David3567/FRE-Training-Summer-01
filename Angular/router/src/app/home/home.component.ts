import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public product = { id: '1', name: 'Angular' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.setspinner(false);
  }

  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigate(['/dynamic'], { state: this.product });
  }
}
