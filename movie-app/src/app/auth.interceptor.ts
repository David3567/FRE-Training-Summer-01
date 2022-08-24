import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { User } from './interfaces/user.interface';
import { HelperService } from './services/helper.service';
import { BASRURL } from './app.module';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser!: User;
  constructor(
    public helper: HelperService,
    @Inject(BASRURL) private url: string
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.onVerifyToken(request)).pipe(
      tap(console.log),
      catchError(this.helper.errorHandler<any>("Security check"))
    );
  }

  onVerifyToken(request: HttpRequest<any>) {
    const token = localStorage.getItem("currentUser");
  
    if (token ) {
     
       request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      })
    } else {
      console.log('InvalidTokenError')
    }
    console.log(request,"request")
    return request;
  }
}
