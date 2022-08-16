import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'
import { User } from '../../../interfaces/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router, public jwtHelper:JwtHelperService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token:any = localStorage.getItem('user')
      console.log(token)
    if(this.jwtHelper.isTokenExpired(token)) {this.router.navigate(['signin']); return false}
    else { return true}
  }

}
