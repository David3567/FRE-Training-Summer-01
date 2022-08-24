import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser!: User;
  constructor(
    private user: UserService,
  ) {
    this.user.currentUser$.subscribe(user => {
      this.currentUser = user;
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser:User = JSON.parse(
      localStorage.getItem('currentUserInfo')!
    );
    if (currentUser?.connected) {
      return true;
    }
    //Check if current token has expired before the user is logged out
    else if (!this.currentUser?.jwt_token && currentUser.connected) {
      this.user.onRefreshToken(currentUser);
      console.log('user re-connected...')
      return true;
    }
    return false;
  }
}
