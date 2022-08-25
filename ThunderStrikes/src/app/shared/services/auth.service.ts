import { Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError, debounceTime } from 'rxjs/operators';
import { User } from "../interfaces/user.interface";
import { of } from 'rxjs';
import { LocalStorageVariables } from "../interfaces/local-storage-variables";
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";
import { SharedApiDataService } from "./shared-api-data.service";
import { RoutingPages } from "../interfaces/routing-pages.interface";
import { AuthGuard } from "./guards/auth.guard";


@Injectable(
  { providedIn: "root" }
)
export class AuthService {
  private _userAuthInfo: User = {};
  private userAuth$ = new BehaviorSubject<User>(this.userAuthInfo);
  private baseUrl = "http://localhost:4231";
  userAuthObs$ = this.userAuth$.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly sharedApiService: SharedApiDataService,
    private readonly authGuard: AuthGuard
  ) { }
  get username() {
    return this.userAuthInfo.username;
  }
  get userInfo() {
    return this.userAuth$.value;
  }
  set role(newRole: string) {
    this._userAuthInfo.role = newRole;
  }
  validRole(): boolean {
    if (this._userAuthInfo.role === "SUPERUSER" || this._userAuthInfo.role === "ADMIN") {
      console.log("Valid Role detected");
      return true;
    }
    if (this._userAuthInfo.role === "USER") {
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

  signin(loginInfo: User) {
    const { email, password } = loginInfo;
    const userCredentials: User = { email, password };
    return this.http.post<{ accessToken: string }>(
      `${this.baseUrl}/auth/signin`,
      userCredentials
    ).pipe(
      tap(({ accessToken }) => {
        this.setToken(accessToken);
        this.router.navigate([RoutingPages.MovieDashboard]);
        this.refreshToken()?.subscribe();
      }),
      catchError(err => {
        console.log(err);
        return of('cannot find this user')
      })
    );
  }
  signOut() {
    localStorage.removeItem(LocalStorageVariables.JWT_TOKEN);
    this.userAuthInfo = {};
    this.authGuard.setAuthenticationStatus(false);
    this.router.navigate([RoutingPages.Home]);
    console.log("You have signed out.");
  }

  register(registerInfo: User) {
    const url = `${this.baseUrl}/auth/signup`;
    return this.http.post<{ accessToken: string }>(
      url,
      registerInfo
    ).pipe(
      tap(() => {
        console.log("Registered");
        this.signin(registerInfo);
      }),
      catchError(err => {
        console.log(err);
        return of('Register Failed')
      })
    )
  }


  checkEmail(email: string) {
    if (email.trim() === "") return of();
    const url = `${this.baseUrl}/auth/check-email`;
    const request = { "email": email };
    return this.http.post<boolean>(
      url,
      request
    );
  }

  upgradeRole(newRole: string, password: string) {
    let retrievedUserToken = localStorage.getItem(LocalStorageVariables.JWT_TOKEN)!;
    const userInfo: User = jwtDecode(retrievedUserToken);
    const {username, email, role, tmdb_key} = userInfo;
    const userCredentials: User = {username, password, email, role:newRole, tmdb_key};
    console.log(userCredentials);
    const url = `${this.baseUrl}/auth/userupdate`;
    return this.http.patch<{ accessToken: string }>(
      url, userCredentials
    ).pipe(
      tap(({ accessToken }) => {
        this.setToken(accessToken);
        this.router.navigate([RoutingPages.MovieDashboard]);
        this._userAuthInfo.role = newRole;
        console.log("Role Updated to: ", this._userAuthInfo.role);
        this.refreshToken()?.subscribe();
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
    if (!retrievedUserToken) return;
    const retrievedUserInfo: User = jwtDecode(retrievedUserToken);
    // Need to make these undefined for the backend to accept it.
    retrievedUserInfo.iat = undefined;
    retrievedUserInfo.exp = undefined;
    return this.http.post<{ accessToken: string }>([this.baseUrl, "auth", "refresh-token"].join("/"), retrievedUserInfo).pipe(
      tap(token => {
        this.setToken(token.accessToken);
        const userData: User = jwtDecode(token.accessToken);
        this.userAuthInfo = userData;
        if (userData.exp) {
          const expirationTime = new Date(userData.exp * 1000);
          const timeout = expirationTime.getTime() - Date.now() - (60 * 1000);
          this.refreshTokenTimeout = setTimeout(() => this.refreshToken()?.subscribe(), timeout);
        }
      }),
      catchError(_ => {
        console.error("User credentials are no longer valid.");
        this.signOut();
        return of();
      }),
    );
  }

  clearRefreshTokenTimeout() {
    clearTimeout(this.refreshTokenTimeout);
  }

  private setToken(newToken: string) {
    localStorage.setItem(LocalStorageVariables.JWT_TOKEN, newToken);
    this.authGuard.setAuthenticationStatus(true);
    this.sharedApiService.apiToken = newToken;
  }
}