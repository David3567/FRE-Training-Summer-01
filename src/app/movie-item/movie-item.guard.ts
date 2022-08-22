import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'any',
})
export class MovieItemGuard implements CanActivate {
  userRole?: string = 'USER';

  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authService.userObs$.subscribe((userInfo) => {
      this.userRole = userInfo.username;
    });
    if (this.userRole === 'ADMIN' || this.userRole === 'SUPER') {
      return true;
    } else {
      return false;
    }
  }
}
