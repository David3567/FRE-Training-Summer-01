import { Injectable } from '@angular/core';

import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root',
})
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: AbstractControl) => {
    const { value: email } = control;
    return this.authService.emailAvailable(email).pipe(
      map((value) => {
        if (value) {
          return { nonUniqueEmail: true };
        }
        return null;
      }),
      catchError((err) => {
        return of({ noConnection: true });
      })
    );
  };
}
