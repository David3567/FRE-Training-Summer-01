import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MovieListGuard implements CanActivate {
  signedIn = false;
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('movie list guard works!');
    this.authService.signedin$.subscribe((ifSignedIn) => {
      this.signedIn = ifSignedIn;
    });
    console.log(this.signedIn);
    return this.authService.signedin$;
  }
}
