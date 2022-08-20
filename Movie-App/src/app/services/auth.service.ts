import { Injectable } from '@angular/core';
import { UserInfo } from '../userinfo';
import { ApiService } from './api.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, catchError, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthInfo: UserInfo = {};
  constructor(private api: ApiService, private router: Router) {}

  //login function to decode incoming accessToken and store it in userAuth state then store to local storage.
  login(loginInfo: UserInfo) {
    return this.api.login(loginInfo).pipe(
      tap(({ accessToken }) => {
        const { id, username, email, role, tmdb_key, exp }: UserInfo =
          jwt_decode(accessToken);
        this.userAuthInfo = {
          id,
          username,
          email,
          role,
          tmdb_key,
          exp,
          jwt_token: accessToken,
        };
        console.log(this.userAuthInfo);
        this.setSession(this.userAuthInfo);
        console.log('Logged in');
        alert('Logged in');
      }),
      catchError((err) => {
        console.log(err);
        alert(err.error.message);
        throw 'Login error: ' + err.error.message;
      })
    );
  }

  register(registerInfo: any) {
    return this.api.register(registerInfo).subscribe((res) => console.log(res));
  }

  private setSession(userObj: any) {
    localStorage.setItem('user-id', userObj.id);
    localStorage.setItem('username', userObj.username);
    localStorage.setItem('email', userObj.email);
    localStorage.setItem('role', userObj.role);
    localStorage.setItem('tmdb_key', userObj.tmdb_key);
    localStorage.setItem('expiration', userObj.exp);
    localStorage.setItem('jwt', userObj.jwt_token);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('tmdb_key');
    localStorage.removeItem('expiration');
    localStorage.removeItem('jwt');
  }

  logout() {
    this.removeSession();
    console.log('Logged out');
    this.router.navigate(['']);
  }
}
