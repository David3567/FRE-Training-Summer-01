import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyService {
  private _randomNo = '';

  constructor() {
    console.log('Lazy1Service Constructed');
    this._randomNo = 'Lazy ' + Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNo() {
    return this._randomNo;
  }
}
