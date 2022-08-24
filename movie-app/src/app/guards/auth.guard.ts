import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser!: User;
  constructor(private user: UserService) {
    this.user.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("auth-guard")
    if (this.currentUser.role ==="USER")
      return true
    return false;
  }
}
