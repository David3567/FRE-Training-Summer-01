import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../userinfo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4231';
  }

  //login api
  login(loginInfo: UserInfo) {
    return this.http.post<{ accessToken: string }>(
      `${this.ROOT_URL}/auth/signin`,
      loginInfo
    );
  }
  //register api
  register(registerInfo: any) {
    return this.http.post(`${this.ROOT_URL}/auth/signup`, registerInfo);
  }
}
