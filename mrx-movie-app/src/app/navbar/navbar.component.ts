import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  LoginStatus$!: Observable<boolean>;
  UserName$!: Observable<any>;
  ngOnInit(): void {
    this.LoginStatus$ = this.authService.isLoggedIn;
    this.UserName$ = this.authService.currentUserName;
  }

  getUserName() {
    return localStorage.getItem('username');
  }

  onLogout() {
    this.authService.logout();
  }
}
