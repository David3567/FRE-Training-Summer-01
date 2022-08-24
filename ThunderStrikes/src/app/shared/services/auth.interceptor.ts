import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageVariables } from "../interfaces/local-storage-variables";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    const token = localStorage.getItem(LocalStorageVariables.JWT_TOKEN);
    console.log(token)
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      })
      return next.handle(cloned);
    }
    else {
    return next.handle(request);
    }
  }
}