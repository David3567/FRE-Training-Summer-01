import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  renderBtn: boolean = true;
  currBtnOn: string = 'Sign In';
  navigateTo: string = 'login';

  constructor(private router: Router) {}

  onButtonClick() {
    if (this.router.url === '/' || this.router.url === '/register') {
      this.router.navigateByUrl(this.navigateTo);
      this.currBtnOn = 'Sign Up';
      this.navigateTo = 'register';
      this.renderBtn = true;
    } else {
      if (this.router.url === '/login') {
        this.router.navigateByUrl(this.navigateTo);
        this.currBtnOn = 'Sign In';
        this.navigateTo = 'login';
        this.renderBtn = true;
      } else {
        if (this.router.url === '/movies') {
          this.renderBtn = false;
        }
      }
    }
  }

  onLogoClick() {
    this.router.navigateByUrl('/');
    this.currBtnOn = 'Sign In';
    this.navigateTo = 'login';
    this.renderBtn = true;
  }
}
