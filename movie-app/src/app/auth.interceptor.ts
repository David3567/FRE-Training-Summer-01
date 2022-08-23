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
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser!: User;
  constructor(
    public helper: HelperService,
    private router: Router,
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

    if (token) {
       return request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      })
    } else {
      console.log('InvalidTokenError');
      this.router.navigate(['/movies-list']);
      return request;
    }
  }
}
