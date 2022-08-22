import { Injectable } from '@angular/core';
import { UserInfo } from '../userinfo';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, catchError, of, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly ROOT_URL = 'http://localhost:4231';
  private userAuthInfo: UserInfo = {};
  private userAuth$ = new BehaviorSubject<UserInfo>(this.userAuthInfo);
  public userAuthObs = this.userAuth$.asObservable();

  //persist login data even after refresh, bootleg way
  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('jwt')) {
      const token: any = localStorage.getItem('jwt');
      const { id, username, email, role, tmdb_key, exp }: any =
        jwt_decode(token);

      this.userAuthInfo = {
        id,
        username,
        email,
        role,
        tmdb_key,
        exp,
        jwt_token: token,
      };
      this.userAuth$ = new BehaviorSubject<UserInfo>(this.userAuthInfo);
      this.userAuthObs = this.userAuth$.asObservable();
      this.startRefreshTokenTimer();
    } else {
      console.log('no local storage jwt currently');
    }
  }

  public isLoggedOn() {
    if (localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }

  public isAdmin() {
    return this.userAuth$.value.role;
  }

  public getToken() {
    return this.userAuth$.value.jwt_token;
  }

  public userSubject() {
    return this.userAuth$.value;
  }

  //login function to decode incoming accessToken and store it in userAuth statem then store to local storage.
  login(loginInfo: UserInfo) {
    return this.http
      .post<{ accessToken: string }>(`${this.ROOT_URL}/auth/signin`, loginInfo)
      .pipe(
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

          this.userAuth$.next(this.userAuthInfo);
          this.setSession(this.userAuthInfo);
          this.startRefreshTokenTimer();
          console.log(this.userAuth$);

          this.router.navigate(['']);
        }),
        catchError((err) => {
          console.log(err);
          alert(err.error.message);
          throw 'Login error: ' + err.error.message;
        })
      );
  }

  register(registerInfo: any) {
    return this.http
      .post(`${this.ROOT_URL}/auth/signup`, registerInfo)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
  }

  private setSession(userObj: any) {
    localStorage.setItem('jwt', userObj.jwt_token);
  }

  private removeSession() {
    localStorage.removeItem('jwt');
  }

  logout() {
    this.userAuthInfo = {};
    this.removeSession();
    this.stopRefreshTokenTimer();
    alert('Logged out');
    this.router.navigate(['/login']);
  }

  //refresh token methods
  private refreshTokenTimeout: any;

  startRefreshTokenTimer() {
    //creating timer 1 minute before expiry time made it 29000 to demonstrate demo
    const expires = new Date(this.userAuth$.value.exp! * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 29000;
    this.refreshTokenTimeout = setTimeout(
      () =>
        this.refreshToken().subscribe((res) => {
          console.log(res);
          console.log('refreshed');
        }),
      timeout
    );
  }

  refreshToken() {
    //create body
    const userInfo: UserInfo = {
      ...this.userAuthInfo,
      exp: undefined,
      jwt_token: undefined,
    };
    return this.http
      .post<{ accessToken: string }>(
        `${this.ROOT_URL}/auth/refresh-token`,
        userInfo
      )
      .pipe(
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
          //setting value to subject and looping the timer
          this.userAuth$.next(this.userAuthInfo);
          // console.log(this.userAuth$);
          this.setSession(this.userAuthInfo);
          this.startRefreshTokenTimer();
        }),
        catchError((err) => {
          console.log(err);
          alert(err.error.message);
          this.logout();
          throw 'Refresh Error: ' + err.error.message;
        })
      );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  updateUserRole(userInfo: any) {
    return this.http
      .patch<{ accessToken: string }>(
        `${this.ROOT_URL}/auth/userupdate/`,
        userInfo
      )
      .pipe(
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

          this.userAuth$.next(this.userAuthInfo);
        }),
        catchError((err) => {
          console.log(err);
          alert(err.error.message);
          throw 'Update Role: ' + err.error.message;
        })
      );
  }
}
