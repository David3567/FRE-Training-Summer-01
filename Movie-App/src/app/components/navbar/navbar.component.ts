import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  username = localStorage.getItem('username');

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  isLoggedOff() {
    if (!localStorage.getItem('username')) {
      return true;
    }
    return false;
  }

  logout() {
    this.auth.logout();
    alert('Logged out');
  }
}
