import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingPages } from '../../interfaces/routing-pages.interface';
import { Location } from '@angular/common';
@Injectable()
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = false;
  constructor(private readonly router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("authenticationStatus:", this.isAuthenticated);
    if (this.isAuthenticated) return true;
    this.router.navigate([RoutingPages.Login]);
    return false;
  }
  setAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }

  get authenticationStatus() {
    return this.isAuthenticated;
  }
}