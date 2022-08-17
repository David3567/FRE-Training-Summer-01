import { Component } from '@angular/core';
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

  movieId: any;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.activateRoute.snapshot.params['id'];
  }

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
        if (
          this.router.url === '/movies' ||
          this.router.url === `/movies/${this.movieId}`
        ) {
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
