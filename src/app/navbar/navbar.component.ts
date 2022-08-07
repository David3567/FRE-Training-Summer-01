import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public currPage: string = "Sign In";

  // eslint-disable-next-line no-empty-function
  constructor(private router: Router) { }

  // eslint-disable-next-line class-methods-use-this
  ngOnInit() {
    if (this.router.url === "/" || this.router.url === "/register") {
      this.currPage = "Sign In";
    } else {
      this.currPage = "Sign Up";
    }
    return this.currPage;
  }

  onSignInClick() {
    this.router.navigateByUrl('/login');
  }

  onLogoClick() {
    this.router.navigateByUrl('/');
  }
}
