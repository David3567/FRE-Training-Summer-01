import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserInfo } from '../interface/userInfo.interface';
import jwt_decode from 'jwt-decode';
import { BASRURL } from '../app.module';
import { Router } from '@angular/router';
import { UserRegister } from '../interface/registerInfo.interface';

@Injectable({ providedIn: 'root' })
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

  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject(localStorage.getItem('username'));

  signin(loginInfo: UserInfo) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrl}/auth/signin`, loginInfo)
      .pipe(
        tap(({ accessToken }) => {
          const { username, id, email, role, tmdb_key, exp }: UserInfo =
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
          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem(
            'token',
            JSON.stringify(this.userAuthInfo.jwt_token)
          );
          localStorage.setItem(
            'username',
            JSON.stringify(this.userAuthInfo.username)
          );
          alert(this.userAuthInfo.username + ' successfully logged in');
          this.router.navigate(['movie-list']);
        }),
        catchError((err) => {
          console.log(err);
          return of('cannot find this user');
        })
      );
  }

  checkLoginStatus(): boolean {
    let getLoginStatus = localStorage.getItem('loginStatus');
    if (getLoginStatus == '1') {
      if (
        localStorage.getItem('token') === null ||
        localStorage.getItem('token') === undefined
      ) {
        return false;
      }
    }
    return false;
  }

  register(registerInfo: UserRegister) {
    return this.http.post(`${this.baseUrl}/auth/signup`, registerInfo);
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }

  getUserRole() {
    return this.userAuthInfo.role;
  }

  logout() {
    this.loginStatus.next(false);
    this.userAuth$.next({});
    localStorage.clear();
    localStorage.setItem('loginStatus', '0');
    this.router.navigate(['/login']);
    console.log('Logged Out Successfully');
  }

  // upgradeRole(newRole: string) {
  //   let getInfo = jwt_decode<string>(localStorage.getItem('token')!);
  //   const url = `${this.baseUrl}/auth/userupdate`;
  //   console.log(getInfo);
  // }
}
