import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
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

  constructor(private authService: AuthService, private router: Router) {}

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
    console.log(this.userRole);
    if (this.userRole === 'ADMIN' || this.userRole === 'SUPER') {
      return true;
    } else {
      this.router.navigateByUrl('user-update');
      return false;
    }
  }
}
