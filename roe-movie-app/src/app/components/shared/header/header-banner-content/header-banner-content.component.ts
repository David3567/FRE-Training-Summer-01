import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-banner-content',
  templateUrl: './header-banner-content.component.html',
  styleUrls: ['./header-banner-content.component.css'],
})
export class HeaderBannerContentComponent implements OnInit {
  Emailvalidation = true;
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  constructor(private router: Router) {}

  ngOnInit() {}
  register() {
    if (this.email.status == 'INVALID') {
      this.Emailvalidation = false;
      return;
    } else {
      this.router.navigate(['register', this.email.value]);
    }
  }
}
