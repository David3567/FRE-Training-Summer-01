import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  errorHandler<T>(operation = "Failed Operation Name", result?: T) {
    return (err: Error) => {
      console.error(`The operation ${operation} has failed:\n Error: ${err.message}`);

      console.log(result)
      //Safe returned value if the request was successful
      return of(result as T);
    }
  }
  get httpOptions() {
    return {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'accept': '*/*'
        }
      )
    };
  }
}
