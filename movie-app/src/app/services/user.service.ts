import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "api/users";

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) { }

  register(user: User): Observable<User> {
    console.log('register', user);
    return this.http.post<User>(this.baseUrl, user ,this.helper.httpOptions)
      .pipe(
        tap((newUser: User) => {
          console.log(`Successfully registered ${newUser.email}`)
        }),
        catchError(this.helper.errorHandler<User>("signUp"))
    )
  }

  signIn(email: string, password: string): any{
    let url = `${this.baseUrl}/?email=${email}&password=${password}`;

    return this.http.get<User[]>(url ,this.helper.httpOptions)
      .pipe(
        tap(_ => {
          console.log(`Successfully logged in ${email}`)
        }),
        catchError(this.helper.errorHandler<User>("signIn"))
      );
  }

  resetPassword(email: string): void {
    console.log(email + "\n");
    this.http.patch<User>(this.baseUrl, this.helper.httpOptions);
  }

  edit(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, this.helper.httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
