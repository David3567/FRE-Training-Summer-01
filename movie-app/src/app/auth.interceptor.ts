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
import { UserService } from './services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser!: User;
  constructor(
    public helper: HelperService,
    private router: Router,
    private userService: UserService,
    @Inject(BASRURL) private url: string
  ) {
    userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.onVerifyToken(request)).pipe(
      tap(console.log),
      catchError(this.helper.errorHandler<any>("Security check"))
    );
  }

  onVerifyToken(request: HttpRequest<any>) {
    const token = localStorage.getItem("currentUser") === this.currentUser.jwt_token;

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
