import { Inject, Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from "../interfaces/user.interface";
import { of } from 'rxjs';


@Injectable()
export class AuthService {
    private userAuthInfo: User = {};
    private userAuth$ = new BehaviorSubject<User>(this.userAuthInfo);
    private baseUrl = "http://localhost:4231";
    userAuthObs$ = this.userAuth$.asObservable();
  
    get userInfo() {
      return this.userAuth$.value;
    }
  
    constructor(
      private readonly http: HttpClient,
    ) {}
  
    signin(loginInfo: User) {
      return this.http.post<{ accessToken: string }>(
        `${this.baseUrl}/auth/signin`,
        loginInfo
      ).pipe(
        tap(({accessToken}) => {
          const {username, id, email, role, tmdb_key, exp}: User = jwt_decode(accessToken);
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

    register(registerInfo: User){
        const url = `${this.baseUrl}/auth/signup`;
    return this.http.post<{ accessToken: string }>(
      url,
      registerInfo
    )
    }
  }