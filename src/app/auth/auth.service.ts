import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASEURL } from '../app.module';
import jwt_decode from 'jwt-decode';

import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

import {
  SignUpCredentials,
  EmailAvailableResponse,
  UserInfoCredentials,
  User,
} from '../interfaces/auth';

@Injectable()
export class AuthService {
  private timerID: any = null;
  private signedin$ = new BehaviorSubject(false);
  private user$ = new BehaviorSubject<User | null>(null);

  get isSignedIn() {
    return this.signedin$.asObservable();
  }
  get user() {
    return this.user$.asObservable();
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(BASEURL) private baseUrl: string,
    private router: Router
  ) {}

  emailAvailable(email: string) {
    return this.http.post<EmailAvailableResponse>(
      `${this.baseUrl}/auth/check-email`,
      { email: email }
    );
  }

  signup(credentials: SignUpCredentials) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrl}/auth/signup`, credentials)
      .pipe(tap(({ accessToken }) => this.onAuth(accessToken)));
  }

  signin(credentials: UserInfoCredentials) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrl}/auth/signin`, credentials)
      .pipe(tap(({ accessToken }) => this.onAuth(accessToken)));
  }

  signout() {
    this.signedin$.next(false);
    this.user$.next(null);
    this.clearToken();
    this.router.navigateByUrl('/');
  }

  autoLogin() {
    const token = this.getToken();
    if (token) {
      this.onAuth(token);
      this.router.navigateByUrl('/movies');
    }
  }

  //* executes on every new token
  private onAuth(token: string) {
    this.storeToken(token);
    this.user$.next(jwt_decode(token));
    this.signedin$.next(true);
    this.refreshToken();
    console.log('refreshed', this.user$.value)
  }

  //* refreshes token on a set time
  private refreshToken() {
    clearTimeout(this.timerID);
    const fifteenMinutes = 900000;
    this.timerID = setTimeout(() => {
      this.http
        .post<{ accessToken: string }>(`${this.baseUrl}/auth/refresh-token`, {
          id: this.user$.value?.id,
          username: this.user$.value?.username,
          email: this.user$.value?.email,
          role: this.user$.value?.role,
          tmdb_key: this.user$.value?.tmdb_key,
        })
        .subscribe({
          next: ({ accessToken }) => this.onAuth(accessToken),
          error: (err) => console.log(err),
        });
    }, fifteenMinutes);
  }

  //* local storage helpers
  private getToken() {
    return localStorage.getItem('accessToken');
  }
  private storeToken(token: string) {
    localStorage.setItem('accessToken', token);
  }
  private clearToken() {
    localStorage.removeItem('accessToken');
  }
}
