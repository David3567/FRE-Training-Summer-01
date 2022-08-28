import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { UserInfo } from '../interface/userInfo.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });

      console.log("auth interceptor",cloned);

      return next.handle(cloned).pipe(
        catchError(error => {
  
          let token = this.auth.getUserInfo() as UserInfo;
  
          if(error.status === 401 && !request.url.includes('auth/signin')){
          // if(error.status === 401 ){
  
            return this.refreshToken(request,next)
          }
          
          return throwError(error)
        })
      );

    } else {
      console.log('11' + token);
      return next.handle(request);
    }
  }

  injectTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
  }

  refreshToken(req: HttpRequest<any>, next: HttpHandler){
    return this.auth.refreshToken().pipe(
      switchMap((data: any) => {
        
        return next.handle(this.injectTokenHeader(req,data.jwt_token))
      }),
      catchError(errodata=>{
        // this.authService.logout();
        return throwError(errodata)
      })
    );
  }
}
