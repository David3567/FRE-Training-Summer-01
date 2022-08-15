import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs'; 
import { tap, catchError } from 'rxjs/operators';
import { UserInfo } from '../interface/userinfo.interface';
import jwt_decode from "jwt-decode";
import { BASRURL } from '../app.module';
import { Router } from '@angular/router';
import { UserRegister } from "../interface/registerInfo.interface";

@Injectable()
export class AuthService {
  private userAuthInfo: UserInfo = {};
  private userAuth$ = new BehaviorSubject<UserInfo>(this.userAuthInfo);
  userAuthObs$ = this.userAuth$.asObservable();

  get userInfo() {
    return this.userAuth$.value;
  }

  constructor(
    private router: Router,
    private readonly http: HttpClient,
    @Inject(BASRURL) private baseUrl: string
  ) {}

  signin(loginInfo: UserInfo) {
    return this.http.post<{ accessToken: string }>(
      `${this.baseUrl}/auth/signin`,
      loginInfo
    ).pipe(
      tap(({accessToken}) => {
        const {username, id, email, role, tmdb_key, exp}: UserInfo = jwt_decode(accessToken);
        this.userAuthInfo = {
          username, 
          id, 
          email, 
          role, 
          tmdb_key, 
          exp, 
          jwt_token: accessToken
        };
        this.userAuth$.next(this.userAuthInfo)
        console.log(this.userAuthInfo.username);
        sessionStorage.setItem('token', JSON.stringify(this.userAuthInfo.jwt_token))
        alert(this.userAuthInfo.username+' successfully logged in')
        this.router.navigate(['']);
      }),
      catchError(err => {
        console.log(err);
        alert(err.error.message)
        return of(err.error.message)
      })
    )
  }

  register(registerInfo: UserRegister){
    return this.http.post(`${this.baseUrl}/auth/signup`, registerInfo)
  }
}
