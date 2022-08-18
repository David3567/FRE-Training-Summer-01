import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../../interfaces/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationUserGuard implements CanActivate {
  token?:string|any=localStorage.getItem('user')
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public jwtHelper: JwtHelperService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!this.token) {
      this.router.navigate(['signin']);
      return false;
    }
    const Role: any = jwt_decode(this.token);
    const role = Role.role;
    if (Role == undefined) {
      this.router.navigate(['signin']);
      return false;
    }
    if (this.jwtHelper.isTokenExpired(this.token)) {
      this.router.navigate(['signin']);
      return false;
    }
    if (role == 'USER') {
      return true;
    }
  }
}
