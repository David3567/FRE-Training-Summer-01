import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { UserInfo } from '../interfaces/auth';

@Injectable()
export class UserUpdateInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<Object>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/auth/userupdate')) {
      const jwt_token = JSON.parse(localStorage.getItem('userData')!).jwt_token;
      const jwt_decoded: UserInfo = jwtDecode(jwt_token);
      const authReq = request.clone({
        headers: request.headers.set('Authorization', jwt_token),
        body: {
          ...request.body,
          tmdb_key: jwt_decoded.tmdb_key,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
