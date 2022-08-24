import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuard implements CanLoad {
  currentUser!: User;
  constructor(private user: UserService) {
    user.currentUser$.subscribe(currentUser => this.currentUser = currentUser)
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = this.currentUser.jwt_token;
    return token! ? true : false;
  }

}
