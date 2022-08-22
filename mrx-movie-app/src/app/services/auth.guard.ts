import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad(): boolean {
    if (this.authService.getUserRole() === ('ADMIN' || 'SUPERUSER')) {
      return true;
    } else {
      this.router.navigate(['/upgrade']);
      return false;
    }
  }
}
