import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wel-banner',
  templateUrl: './wel-banner.component.html',
  styleUrls: ['./wel-banner.component.css'],
})
export class WelBannerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  regisClick() {
    this.router.navigate(['/register', {}]);
  }
}
