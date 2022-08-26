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

  constructor(
    private router: Router,
    private readonly http: HttpClient,
    @Inject(BASRURL) private baseUrl: string
  ) {}

  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject(localStorage.getItem('username'));

  signin(loginInfo: UserInfo) {
    return this.http
      .post<{ accessToken: any }>(`${this.baseUrl}/auth/signin`, loginInfo)
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
          //console.log(this.userAuthInfo.jwt_token);
          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('token', this.userAuthInfo.jwt_token!);
          localStorage.setItem('username', this.userAuthInfo.username!);
          alert(this.userAuthInfo.username + ' successfully logged in');
          this.router.navigate(['movie-list']);
        }),
        catchError((err) => {
          console.log(err);
          return of('cannot find this user');
        })
      );
  }

  get userInfo() {
    return this.userAuth$.value;
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

  getApiKey(): string {

    if (
      localStorage.getItem('token') === null ||
      localStorage.getItem('token') === undefined
    ) {
      return '';
    } else {
      let jwtoken = localStorage.getItem('token') as string;
      const { tmdb_key }: UserInfo = jwt_decode(jwtoken);
      
      return tmdb_key  + '';
    }
  }

  logout() {
    this.loginStatus.next(false);
    localStorage.clear();
    localStorage.setItem('loginStatus', '0');
    this.router.navigate(['/login']);
    location.reload();
    console.log('Logged Out Successfully');
  }

  upgradeRole(newRole: string) {
    const { exp, iat, id, ...user } = jwt_decode<any>(
      localStorage.getItem('token')!
    );
    user.role = newRole;
    //console.log(...user);
    const url = `${this.baseUrl}/auth/userupdate`;
    return this.http.patch<{ accessToken: string }>(url, { ...user }).pipe(
      tap(({ accessToken }) => {
        this.userAuthInfo.jwt_token = accessToken;
        this.userAuthInfo.role = newRole;
        alert('Upgraded to ' + newRole + ', please login again!');
        this.logout();
      }),
      catchError((err) => {
        //console.log(accessToken);
        console.log(err);
        return of('Role Update Failed');
      })
    );
  }
}
