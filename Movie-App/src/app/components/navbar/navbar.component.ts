import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  userInfo: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.userAuthObs.subscribe((res) => {
      this.userInfo = res;
    });
  }

  isLoggedOff() {
    if (!localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }

  logout() {
    this.auth.logout();
  }
}
