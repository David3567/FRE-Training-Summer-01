import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingPages } from '../../interfaces/routing-pages.interface';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class RedundantGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authGuard: AuthGuard,
    private readonly location: Location
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    const currentPath = this.location.path();
    if (this.authGuard.authenticationStatus) {
      if (currentPath !== `/${RoutingPages.Login}` || currentPath !== `/${RoutingPages.Register}`)
      this.router.navigate([RoutingPages.Home]);
      return false;
    }
    return true;
  }

}
