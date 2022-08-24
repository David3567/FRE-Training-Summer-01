import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'any',
})
export class MovieItemGuard implements CanActivate {
  userRole!: any

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authService.user.subscribe(user => this.userRole = user?.role)

    console.log('at movie item guard', this.userRole);
    if (this.userRole === 'ADMIN' || this.userRole === 'SUPER') {
      return true;
    } else {
      this.router.navigateByUrl('user-update');
      return false;
    }
  }
}
