import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../interfaces/user';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public jwtHelper: JwtHelperService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token : string | any = localStorage.getItem('user');
    if (!token) {
      this.router.navigate(['signin']);
      return false;
    }
    const Role: any = jwt_decode(token);
    const role = Role.role;
    if (Role == undefined) {
      this.router.navigate(['signin']);
      return false;
    }
    if (this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['signin']);
      return false;
    }
    else{return true}
    }
  }







