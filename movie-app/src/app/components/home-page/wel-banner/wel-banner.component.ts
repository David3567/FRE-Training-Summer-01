import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-wel-banner',
  templateUrl: './wel-banner.component.html',
  styleUrls: ['./wel-banner.component.css'],
})
export class WelBannerComponent implements OnInit {
  constructor(
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.navigateToMovies()
  }

  regisClick() {
    this.router.navigate(['/register', {}]);
  }
}
