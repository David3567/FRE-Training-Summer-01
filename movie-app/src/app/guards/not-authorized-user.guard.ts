import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedUserGuard implements CanDeactivate<SignInComponent | RegisterPageComponent> {
  currentUser!: User;
  constructor(private user: UserService) {
    user.currentUser$.subscribe(user => this.currentUser = user);
  }

  canDeactivate(
    component: SignInComponent | RegisterPageComponent | HomePageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree  {

    if (localStorage.getItem("currentUser")) {
      return true;
    }
    return false;
  }
}
