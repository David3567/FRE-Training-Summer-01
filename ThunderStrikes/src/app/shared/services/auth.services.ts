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
  get username(){
    return this.userAuthInfo.username;
  }
  get userInfo() {
    return this.userAuth$.value;
  }
  set role(newRole: string) {
    this._userAuthInfo.role = newRole;
  }
  validRole(): boolean{
    if (this._userAuthInfo.role === "SUPERUSER" || this._userAuthInfo.role === "ADMIN"){
      console.log("Valid Role detected");
      return true;
    }
    if (this._userAuthInfo.role === "USER"){
      console.log("Role USER detected");
      return false;
    }
    else {
      console.log("none detected");
      return false;
    }
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
        this.setToken(accessToken);
        console.log("Signed in.");
        this.refreshToken()?.subscribe();
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
    ).pipe(
      tap(({ accessToken }) => {
        this.setToken(accessToken);
        console.log("Registered");
        this.refreshToken()?.subscribe();
      }),
      catchError(err => {
        console.log(err);
        return of('Register Failed')
      })
    )
  }

  checkEmail(email: string){
    const url = `${this.baseUrl}/auth/check-email`;
  return this.http.post<{ accessToken: string }>(
    url,
    email
  )
  }

  upgradeRole(newRole: string, password: string){ 
    let retrievedUserToken = localStorage.getItem(LocalStorageVariables.JWT_TOKEN)!;
    const { exp, iat, id, ...user } = jwt_decode<any>(retrievedUserToken);
    user.role = newRole;
    const url = `${this.baseUrl}/auth/userupdate`;
    return this.http.patch<{ accessToken: string }>(url, {...user, password}).pipe(
    tap(({ accessToken }) => {
      this.setToken(accessToken);
      this._userAuthInfo.role = newRole;
      console.log("Role Updated");
      this.refreshToken()?.subscribe();
      this.router.navigate(["movie-dashboard"]);
    }),
    catchError(err => {
      console.log(err);
      return of('Role Update Failed')
    })
  )
  }

  private refreshTokenTimeout: any;

  refreshToken() {
    // No need to refresh the token if they've never logged in.
    const retrievedUserToken = localStorage.getItem(LocalStorageVariables.JWT_TOKEN);
    if(!retrievedUserToken) return;
    const retrievedUserInfo: User = jwtDecode(retrievedUserToken);
    // Need to make these undefined for the backend to accept it.
    retrievedUserInfo.iat = undefined;
    retrievedUserInfo.exp = undefined;
    return this.http.post<{ accessToken: string }>([this.baseUrl, "auth", "refresh-token"].join("/"), retrievedUserInfo).pipe(
      tap(token => {
        this.setToken(token.accessToken);
        const userData: User = jwtDecode(token.accessToken);
        this.userAuthInfo = userData;
        this.isLoggedIn = true;
        if(userData.exp){
          const expirationTime = new Date(userData.exp * 1000);
          const timeout = expirationTime.getTime() - Date.now() - (60 * 1000);
          this.refreshTokenTimeout = setTimeout( () => this.refreshToken()?.subscribe(), timeout);
        }
      }),
      catchError(_ => {
        console.error("User credentials are no longer valid.");
        this.signOut();
        return of();
      }),
    );
  }

  clearRefreshTokenTimeout(){
    clearTimeout(this.refreshTokenTimeout);
  }

  private setToken(newToken: string) {
    localStorage.setItem(LocalStorageVariables.JWT_TOKEN, newToken);
    console.log("Successfully updated token.");
  }
}