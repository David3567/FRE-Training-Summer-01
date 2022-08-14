import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs'; 
import { tap, catchError } from 'rxjs/operators';
import { UserInfo } from '../interface/userinfo.interface';
import jwt_decode from "jwt-decode";
import { BASRURL } from '../app.module';

@Injectable()
export class AuthService {
  private userAuthInfo: UserInfo = {};
  private userAuth$ = new BehaviorSubject<UserInfo>(this.userAuthInfo);
  userAuthObs$ = this.userAuth$.asObservable();

  get userInfo() {
    return this.userAuth$.value;
  }

  constructor(
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
      }),
      catchError(err => {
        console.log(err);
        return of('cannot find this user')
      })
    )
  }
}
