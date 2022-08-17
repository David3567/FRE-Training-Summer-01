import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError } from 'rxjs';
import { BASRURL } from '../app.module';
import { User } from '../interfaces/user.interface';
import { HelperService } from './helper.service';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private helper: HelperService,
    @Inject(BASRURL) private baseUrl: string
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, user)
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

  signIn({email, password}: any): any{
    let url = `${this.baseUrl}/auth/signin`;

    return this.http.post<{ accessToken: string }>(url,{email, password} ,this.helper.httpOptions)
      .pipe(
        tap((token) => {
          console.log(`Successfully logged in ${token}`)
          localStorage.setItem('currentUser', token.accessToken)
          setTimeout(() => {
            this.router.navigate([`movies-list`]);
          }, 5000);
        }),
        catchError(this.helper.errorHandler<User>("signIn"))
      );
  }

  checkEmail(email: string){
    return this.http.post<{ email: string }>(`${this.baseUrl}/auth/check-email`, {email}, this.helper.httpOptions)
      .pipe(
        debounceTime(50),
        tap((res) => {
          console.log(`Email ${email} already in use:\n ${res}`)
        }),
        catchError(this.helper.errorHandler<any>("checkEmail")));
  }

  resetPassword(email: string): void {
    console.log(email + "\n");
    this.http.patch<User>(this.baseUrl, this.helper.httpOptions);
  }

  edit(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, this.helper.httpOptions);
  }
}
