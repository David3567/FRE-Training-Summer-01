import { Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from "../interfaces/user.interface";
import { of } from 'rxjs';
import { LocalStorageVariables } from "../interfaces/local-storage-variables";
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";


@Injectable(
  { providedIn: "root" }
)
export class AuthService {
  private _userAuthInfo: User = {};
  private _isLoggedIn: boolean = false;
  private userAuth$ = new BehaviorSubject<User>(this.userAuthInfo);
  private baseUrl = "http://localhost:4231";
  userAuthObs$ = this.userAuth$.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }
  get userInfo() {
    return this.userAuth$.value;
  }
  set userAuthInfo(newInfo: User) {
    this._userAuthInfo = newInfo;
    this.userAuth$.next(this._userAuthInfo);
  }
  get userAuthInfo() {
    return this._userAuthInfo;
  }
  set isLoggedIn(value: boolean){
    this._isLoggedIn = value;
  }
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  signin(loginInfo: User) {
    return this.http.post<{ accessToken: string }>(
      `${this.baseUrl}/auth/signin`,
      loginInfo
    ).pipe(
      tap(({ accessToken }) => {
        const userInfo: User = jwt_decode(accessToken);
        this.userAuthInfo = userInfo;
        this.setToken(accessToken);
        console.log("Signed in.");
        this.isLoggedIn = true;
        console.log("this.isLoggedIn: ", this.isLoggedIn);
      }),
      catchError(err => {
        console.log(err);
        return of('cannot find this user')
      })
    )
  }
  signOut() {
    localStorage.removeItem(LocalStorageVariables.JWT_TOKEN);
    this.userAuthInfo = {};
    this.isLoggedIn = false;
    this.router.navigate([""]);
    console.log("You have signed out.");
  }

  register(registerInfo: User) {
    const url = `${this.baseUrl}/auth/signup`;
    return this.http.post<{ accessToken: string }>(
      url,
      registerInfo
    )
  }

  refreshToken() {
    // No need to refresh the token if they've never logged in.
    if (!localStorage.getItem(LocalStorageVariables.JWT_TOKEN)) return;
    return this.http.post<{ accessToken: string }>([this.baseUrl, "auth", "refresh-token"].join("/"), this.userAuthInfo).pipe(
      catchError(_ => {
        console.error("User credentials are no longer valid.");
        this.signOut();
        return of();
      }),
      tap(token => {
        this.setToken(token.accessToken);
      })
    );
  }


  private setToken(newToken: string) {
    localStorage.setItem(LocalStorageVariables.JWT_TOKEN, newToken);
    console.log("Successfully updated token.");
  }
  private getUserToken() {
    return localStorage.getItem(LocalStorageVariables.JWT_TOKEN);
  }
  setUserInfo() {
    const userToken = this.getUserToken();
    if (userToken) {
      const userData: User = jwtDecode(userToken);
      this.userAuthInfo = userData;
      console.log("Welcome back,", this.userAuthInfo.username);
      this.isLoggedIn = true;
    }
  }
}