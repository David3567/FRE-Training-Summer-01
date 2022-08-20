import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import {
  SignUpCredentials,
  SignUpResponse,
  EmailAvailableResponse,
  SignInCredentials,
} from '../interfaces/auth';
@Injectable({
  providedIn: 'any',
})
export class AuthService {
  rootUrl = 'http://localhost:4231';
  signedin$ = new BehaviorSubject(false);

  get userInfo() {
    return { role: 'ADMIN' };
  }

  constructor(private http: HttpClient) {}
  emailAvailable(email: string) {
    return this.http.post<EmailAvailableResponse>(
      `${this.rootUrl}/auth/check-email`,
      {
        email: email,
      }
    );
  }
  signup(credentials: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  signin(credentials: SignInCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
}
