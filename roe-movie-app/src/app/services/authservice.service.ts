import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../interfaces/user';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userAuthInfo: User = {};
  private userAuth$ = new BehaviorSubject<User>(this.userAuthInfo);
  userAuth = this.userAuth$.asObservable();
  private readonly baseUrl = 'http://localhost:4231';
  private readonly api_key: string = '6e7a30a6be99643eb9de647bea8a65b1';

  get userInfo() {
    return this.userAuth$.value;
  }

  constructor(
    private router: Router,
    public http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  register(registerInfo: User) {
    registerInfo.tmdb_key = this.api_key;
    const url = `${this.baseUrl}/auth/signup`;
    return this.http.post<{ accessToken: string }>(url, registerInfo).pipe(
      tap(({ accessToken }) => {
        console.log('access', jwt_decode(accessToken));
        const { username, id, email, role, tmdb_key, exp }: User =
          jwt_decode(accessToken);
        this.userAuthInfo = {
          username,
          id,
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
        throw err;
      })
    );
  }

  refresh_Token(registerInfo: User) {
    const url = `${this.baseUrl}/auth/refresh-token`;
    // console.log('new token')
    return this.http.post<{ accessToken: string }>(url, registerInfo).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setRole(password: string, newrole: string) {
    const url = `${this.baseUrl}/auth/userupdate`;
    return this.http.patch<{ accessToken: string }>(url, {role: newrole}).pipe(
      tap(({ accessToken }) => {
        const { username, id, email, role, tmdb_key, exp }: User =
          jwt_decode(accessToken);
        this.userAuthInfo = {
          username,
          id,
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
        throw err;
      })
    )
  }

  login(signinInfo: User) {
    const url = `${this.baseUrl}/auth/signin`;
    return this.http.post<{ accessToken: string }>(url, signinInfo).pipe(
      tap(({ accessToken }) => {
        console.log('access', jwt_decode(accessToken));
        const { username, id, email, role, tmdb_key, exp }: User =
          jwt_decode(accessToken);
        this.userAuthInfo = {
          username,
          id,
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
        throw err;
      })
    );
  }
}
