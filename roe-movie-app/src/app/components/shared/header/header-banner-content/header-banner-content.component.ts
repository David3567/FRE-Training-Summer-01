import {Component,  OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface userInfo {
  email: string,
  exp: number,
  iat: number,
  id: string,
  role: string,
  tmdb_key: string,
  username: string
}

@Component({
  selector: 'app-header-banner-content',
  templateUrl: './header-banner-content.component.html',
  styleUrls: ['./header-banner-content.component.css'],
})
export class HeaderBannerContentComponent implements OnInit,OnChanges {
  Emailvalidation = true;
  displayFields: boolean = true
  userInfo?: userInfo
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }
ngOnInit(): void {
    const token: string | any = localStorage.getItem('user');
    if (token) {
      this.userInfo = jwt_decode(token);
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.displayFields = false
      }
      else { this.displayFields = true }
    }
}
  ngOnChanges(): void {
  }




  register() {
    if (this.email.status == 'INVALID') {
      this.Emailvalidation = false;
      return;
    } else {
      this.router.navigate(['register', this.email.value]);
    }
  }
}
