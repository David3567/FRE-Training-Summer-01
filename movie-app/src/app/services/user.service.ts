import { HttpClient } from '@angular/common/http';
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

  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private helper: HelperService,
    @Inject(BASRURL) private baseUrl: string
  ) {}

  register(user: User): Observable<User> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, user).pipe(
      tap((newUser: User) => {
        console.log(`Successfully registered ${newUser.email}`);
        setTimeout(() => {
          this.router.navigate([`sign-in`]);
        }, 1000);
      }),
      catchError(this.helper.errorHandler<User>('register'))
    );
  }

  signIn({ email, password }: any): any {
    let url = `${this.baseUrl}/auth/signin`;

    return this.http
      .post<{ accessToken: string }>(
        url,
        { email, password },
        this.helper.httpOptions
      )
      .pipe(
        tap(({ accessToken }) => {
          console.log(`Successfully logged in ${accessToken}`);

          const { id, username, email, role, tmdb_key }: User =
            jwt_decode(accessToken);

          this.userAuth = {
            id,
            username,
            email,
            role,
            tmdb_key,
            jwt_token: accessToken,
          };

          this.userAuthSubject$.next(this.userAuth);
          localStorage.setItem('currentUser', accessToken);

          setTimeout(() => {
            this.router.navigate([`movies-list`]);
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
    }, 2000);
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

  edit(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, this.helper.httpOptions);
  }
}
