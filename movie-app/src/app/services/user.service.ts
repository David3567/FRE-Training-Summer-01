import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError, BehaviorSubject, of } from 'rxjs';
import { BASRURL } from '../app.module';
import { User } from '../interfaces/user.interface';
import { HelperService } from './helper.service';
import { debounceTime } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUserInfo!: User;
  currentUser$ = new BehaviorSubject<User>(this.currentUserInfo);
  user = this.currentUser$.asObservable();
  shouldRefresh: boolean = false;
  tokenShouldRefresh$ = new BehaviorSubject<boolean>(this.shouldRefresh);
  tokenShouldRefresh = this.tokenShouldRefresh$.asObservable();

  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private helper: HelperService,
    @Inject(BASRURL) private baseUrl: string
  ) { }

  register(user: User): Observable<User> {
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

  signIn(userInfo: User): any{
    let url = `${this.baseUrl}/auth/signin`;

    return this.http.post<{ accessToken: string }>(url,userInfo, this.helper.httpOptions)
    .pipe(
      tap(({accessToken}) => {
        console.log(`Successfully logged in ${accessToken}`)

        localStorage.setItem('currentUser', accessToken);
        localStorage.setItem('password', userInfo?.password!);

        const {
          username,  id,  email, role, tmdb_key, exp, connected=true
        }: User = jwt_decode(accessToken);

        this.currentUserInfo = {
          username, id, email, role, tmdb_key, exp, connected,jwt_token: accessToken
        }
        this.currentUser$.next(this.currentUserInfo);

        localStorage.setItem('currentUserInfo', JSON.stringify(this.currentUserInfo));

        setTimeout(() => {
          this.router.navigate([`movies-list`]);
        }, 3000);
      }),
      catchError(this.helper.errorHandler<User>("signIn"))
    );
}

//Generate user information based on
//the token provided
generateToken(accessToken:string) {
  const {
    username,  id,  email, role, tmdb_key, exp, connected=true
  }: User = jwt_decode(accessToken);

  this.currentUserInfo = {
    username, id, email, role, tmdb_key, exp, connected,
    jwt_token:accessToken
  }
  this.currentUser$.next(this.currentUserInfo);
}

onRefreshToken(user:User) {
  if (this.shouldRefresh) {
    return this.http.post<{ accessToken: string}>(this.baseUrl + '/auth/refresh-token', user, this.helper.httpOptions)
      .pipe(
        tap(({accessToken}) => {
          debounceTime(60);
          console.log("Successfully refreshed token\n", accessToken);
          localStorage.setItem('currentUser', accessToken);
          this.generateToken(accessToken)
        }),
        catchError(this.helper.errorHandler<{accessToken: string}>("Refreshing token"))
    )
  }
  return of(null)
}

signOut(): void {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentUserInfo');
  this.currentUser$.next({});

  setTimeout(() => {
  this.router.navigate([`homepage`]);
  }, 1000);
}

checkEmail(email: string){
  return this.http.post<{ email: string }>(`${this.baseUrl}/auth/check-email`, {email}, this.helper.httpOptions)
    .pipe(
      debounceTime(50),
      tap((res) => {
        console.log(`Email ${email} already in use:\n ${res}`);
      }),
      catchError(this.helper.errorHandler<any>("checkEmail")));
}

onUpdateRole(user:
  {
    username: string,
    password: string,
    email: string,
    role: string,
    tmdb_key: string
  }): Observable<User> {

  return this.http.patch<{accessToken: string}>(`${this.baseUrl}/auth/userupdate`, user)
    .pipe(
      tap(({accessToken}) => {
        console.log("Successfully updated user", accessToken);
      }),
      catchError(this.helper.errorHandler<any>("The user Update info"))
    )
}

navigateToMovies() {
  // this.generateToken();
  let user: User = JSON.parse(
    localStorage.getItem("currentUserInfo")!
  )

  if (user?.connected) {
    console.log(user.connected)
    this.router.navigate(['/movies-list'])
    .then(() => console.log("Navigating to movies list..."))
    .catch((e) => console.log("Can't navigate", e))
  }
  // this.currentUser$.subscribe(res => {
  //   console.log(res);
  //   this.currentUserInfo = res;
  // });
}
}






