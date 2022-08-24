import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, tap, catchError } from 'rxjs';


import { BASRURL } from '../app.module';
import { User } from '../interfaces/user.interface';
import { HelperService } from './helper.service';
import { debounceTime } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userAuth: User = {};
  public userAuthSubject$ = new BehaviorSubject<User>(this.userAuth);
  userAuthObs$ = this.userAuthSubject$.asObservable();
// I keep both here
  currentUserInfo!: User;
  currentUser$ = new BehaviorSubject<any>(this.currentUserInfo);
  user = this.currentUser$.asObservable();


  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private helper: HelperService,
    @Inject(BASRURL) private baseUrl: string
  ) {}

  register(user: User): Observable<User> {
// <<<<<<< HEAD
  //   return this.http.post<any>(`${this.baseUrl}/auth/signup`, user).pipe(
  //     tap((newUser: User) => {
  //       console.log(`Successfully registered ${newUser.email}`);
  //       setTimeout(() => {
  //         this.router.navigate([`sign-in`]);
  //       }, 1000);
  //     }),
  //     catchError(this.helper.errorHandler<User>('register'))
  //   );
  // }

  // signIn({ email, password }: any): any {
  //   let url = `${this.baseUrl}/auth/signin`;
  //   console.log(`${this.baseUrl}/auth/signin`,"this")
  //   return this.http
  //     .post<{ accessToken: string }>(
  //       url,
  //       { email, password },
  //       this.helper.httpOptions
  //     )
  //     .pipe(
  //       tap(({ accessToken }) => {
  //         console.log(`Successfully logged in ${accessToken}`);

  //         const { id, username, email, role, tmdb_key }: User =
  //           jwt_decode(accessToken);

  //         this.userAuth = {
  //           id,
  //           username,
  //           email,
  //           role,
  //           tmdb_key,
  //           jwt_token: accessToken,
  //         };

  //         this.userAuthSubject$.next(this.userAuth);
  //         localStorage.setItem('currentUser', accessToken);

// =======
    return this.http.post<any>(`${this.baseUrl}/auth-c/signup`, user)
      .pipe(
        tap((newUser: User) => {
          console.log(`Successfully registered ${newUser.email}`);
          setTimeout(() => {
            this.router.navigate([`sign-in`]);
          }, 2000);
        }),
        catchError(this.helper.errorHandler<User>("register"))
    )
  }

  signIn(userInfo: any): any{
    let url = `${this.baseUrl}/auth/signin`;
    
    return this.http.post<{ accessToken: string }>(url,userInfo ,/*this.helper.httpOptions*/)
      .pipe(
        tap(({accessToken}) => {
          console.log(`Successfully logged in ${accessToken}`)
          localStorage.setItem('currentUser', accessToken);

          this.generateToken();

// >>>>>>> feature/Team_KCB/S2A-70/JANUARY
          setTimeout(() => {

            this.router.navigate([`/movies-list`]);
            console.log("setTimeout")
          }, 1000);

        }),
        catchError(this.helper.errorHandler<User>('signIn'))
      );
  }

  signOut(): void {
    localStorage.removeItem('currentUser');
    this.userAuth = {};
    this.userAuthSubject$.next(this.userAuth);

    setTimeout(() => {
      this.router.navigate([`homepage`]);
    }, 1000);
  }

  checkEmail(email: string) {
    return this.http
      .post<{ email: string }>(
        `${this.baseUrl}/auth/check-email`,
        { email },
        this.helper.httpOptions
      )
      .pipe(
        debounceTime(50),
        tap((res) => {
          console.log(`Email ${email} already in use:\n ${res}`);
        }),
        catchError(this.helper.errorHandler<any>('checkEmail'))
      );
  }

  resetPassword(email: string): void {
    console.log(email + '\n');
    this.http.patch<User>(this.baseUrl, this.helper.httpOptions);
  }

  /**
   * This function will generate a the token even on the page
    reload as long as the user is logged in.
   */
  generateToken() {
    let accessToken = localStorage.getItem('currentUser');

    const {
      username,  id,  email, role, tmdb_key, exp
    }: any = jwt_decode(accessToken!);

    this.currentUserInfo = {
      username,
      id,
      email,
      role,
      tmdb_key,
      //exp,
      jwt_token: accessToken!
    }
   this.currentUser$.next(this.currentUserInfo);
  }

  onUpdateRole(user:
    {
      username: string,
      password: string,
      email: string,
      role: string,
      tmdb_key: string
    }): Observable<User> {

    return this.http.patch<any>(`${this.baseUrl}/auth/userupdate`, user)
      .pipe(
        tap((updated) => {
          console.log("Successfully updated user");
          return updated;
        }),
        catchError(this.helper.errorHandler<any>("The user Update info"))
      )
  }
}
