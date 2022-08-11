import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = false;
  subj$ = new BehaviorSubject(this.isLoading);

  constructor() {}

  setspinner(bol: boolean) {
    this.subj$.next(bol);
  }
}
