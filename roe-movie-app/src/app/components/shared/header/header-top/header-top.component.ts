import { Component, Input, OnInit, Self, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent implements OnInit {
  @Input() displayButton: Boolean = false;
  @Input() displaySelect = false;
  @Input() isSignIn = false;
  userInfo?: userInfo
  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    if(this.isSignIn==true){}
    const token: string | any = localStorage.getItem('user');
    if (token) {
      this.userInfo = jwt_decode(token);
      if (this.jwtHelper.isTokenExpired(token)) {
        this.displayButton = true
      }
      else { this.displayButton = false }
    }
  }

  signin() {
    this.router.navigate(['signin']);
  }
  signout() {
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
  returnhome() {
    this.router.navigate(['home']);
  }
}
