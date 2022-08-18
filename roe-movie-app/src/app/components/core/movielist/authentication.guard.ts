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
import { User } from '../../../interfaces/user';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from '../../../services/authservice.service';

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
    const token: string | any = localStorage.getItem('user');
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
    if (role == 'USER') {
      this.router.navigate(['movielist/movielist_user'], {
        relativeTo: this.route,
      });
      return false;
    } else {
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationResolver implements Resolve<any> {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public jwtHelper: JwtHelperService,
    private auth: AuthenticationService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<object> | null | Observable<any> | any {
    const token: string | any = localStorage.getItem('user');
    if (token) {
      /*
       "id": "string",
  "username": "string",
  "email": "string",
  "role": "string",
  "tmdb_key": "string"
      */
      const userInfo: any = jwt_decode(token);
      let id = userInfo.id;
      let username = userInfo.username;
      let email = userInfo.email;
      let role = userInfo.role;
      let tmdb_key = userInfo.tmdb_key;
      const interval = setInterval(() => {
        this.auth
          .refresh_Token({ id, username, email, role, tmdb_key })
          .subscribe((data: any) => {
            localStorage.setItem('user', JSON.stringify(data));
          });
      }, 1000 * 60 * 25);
      return { userinfo: userInfo, interval };
    }
  }
}
