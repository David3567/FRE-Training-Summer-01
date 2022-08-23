import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import {
  SignUpCredentials,
  EmailAvailableResponse,
  UserInfoCredentials,
} from '../interfaces/auth';
import { BASEURL } from '../app.module';
import { User } from './user/user.module';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  private userAuthInfo: UserInfoCredentials = {};
  private tokenExpirationTimer: any;
  private userAuth$ = new BehaviorSubject<UserInfoCredentials | User>(
    this.userAuthInfo
  );
  signedin$ = new BehaviorSubject(false);

  userAuthObs$ = this.userAuth$.asObservable();
  user$ = new Subject<User>();

  userObs$ = this.user$.asObservable();
  get userInfo() {
    return this.userAuthObs$;
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(BASEURL) private baseUrl: string,
    private router: Router
  ) {}
  emailAvailable(email: string) {
    return this.http.post<EmailAvailableResponse>(
      `${this.baseUrl}/auth/check-email`,
      {
        email: email,
      }
    );
  }
  signup(credentials: SignUpCredentials) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrl}/auth/signup`, credentials)
      .pipe(
        tap(({ accessToken }) => {
          const {
            username,
            email,
            id,
            role,
            tmdb_key,
            iat,
            exp,
          }: UserInfoCredentials = jwt_decode(accessToken);
          this.userAuthInfo = {
            username,
            email,
            id,
            role,
            tmdb_key,
            exp,
            iat,
            jwt_token: accessToken,
          };
          this.signedin$.next(true);
          this.handleAuthentication();
          this.userAuth$.next(this.userAuthInfo);
        })
      );
  }

  signin(credentials: UserInfoCredentials) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrl}/auth/signin`, credentials)
      .pipe(
        tap(({ accessToken }) => {
          const {
            username,
            email,
            id,
            role,
            tmdb_key,
            iat,
            exp,
          }: UserInfoCredentials = jwt_decode(accessToken);
          this.userAuthInfo = {
            username,
            email,
            id,
            role,
            tmdb_key,
            exp,
            iat,
            jwt_token: accessToken,
          };
          this.signedin$.next(true);
          // this.handleAuthentication();
          this.userAuth$.next(this.userAuthInfo);
          console.log('signIn auth service works!');
        })
      );
  }
  signout() {
    this.userAuth$.next({});
    this.router.navigateByUrl('/');
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.signedin$.next(false);
  }
  autoLogout(expirDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signout();
    }, expirDuration * 1000);
  }
  autoLogin() {
    const userData: {
      username: string;
      role: string;
      email: string;
      id: string;
      exp: number;
      jwt_token: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.username,
      userData.role,
      userData.email,
      userData.id,
      userData.exp,
      userData.jwt_token
    );
    if (loadedUser.token) {
      this.userAuth$.next(loadedUser);
      this.user$.next(loadedUser);

      const expirationDuration =
        new Date(userData.exp).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
      this.signedin$.next(true);
    }
  }
  handleAuthentication() {
    const expireDate: any = new Date(this.userAuthInfo.exp * 1000);

    const user = new User(
      this.userAuthInfo.username,
      this.userAuthInfo.role,
      this.userAuthInfo.email,
      this.userAuthInfo.id,
      expireDate,
      this.userAuthInfo.jwt_token
    );
    this.autoLogout(expireDate * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
