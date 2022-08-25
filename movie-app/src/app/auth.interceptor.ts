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
import { BASRURL, movieApiUrl } from './app.module';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // currentUser!: User;
  constructor(
    public helper: HelperService,
    private userService: UserService,
    private http: HttpClient,
    @Inject(BASRURL) private baseApiURL: string,
    @Inject(movieApiUrl) private moviesApiURL: string
  ) {
    // userService.generateToken(localStorage.getItem('currentUser')!)
    // this.userService.currentUser$.subscribe(user => {
    //   this.currentUser = user;
    // })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.onVerifyToken(request))
      .pipe(tap(console.log),
      catchError(this.helper.errorHandler<any>("Security check"))
    );
  }

  onVerifyToken(request: HttpRequest<any>) {
    let currentUser: User = JSON.parse(localStorage.getItem('currentUserInfo')!);
    const token = currentUser?.jwt_token;

    console.log(token)
    // console.log(this.currentUser)

    if (token ) {
      if (request.url.startsWith(`${this.baseApiURL}/auth/refresh-token`)
        && request.method === "POST") {
      this.userService.tokenShouldRefresh$.next(true);
      return request;
    }

    if ( request.url.startsWith(`${this.moviesApiURL}`) || currentUser.connected){
      request.headers.set('Content-Type', 'application/json');
      request.headers.set('Accept', '*');
      request.headers.set('Authorization', 'Bearer '+token);
      return request;
    }
    if(
      (request.url.startsWith(`${this.baseApiURL}/auth/userupdate`) && request.method === "PATCH")||
      (request.url.startsWith(`${this.baseApiURL}/auth/signin`) && request.method === "POST")
    ) {
      return request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      })
    }
    else {
      console.error('InvalidTokenError')
    }
  }
    return request;
  }
}