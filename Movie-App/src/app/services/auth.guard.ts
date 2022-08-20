import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private  _router: Router){}

  // canActivate() : boolean | undefined {
  //     if(this._authService){
  //       return true
  //     } else {
  //       this._router.navigate(['/login'])
  //     }
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }
  checkUserLogin(next: ActivatedRouteSnapshot, url: string): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
}
