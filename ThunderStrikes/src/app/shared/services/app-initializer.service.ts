import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from './auth.services';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(private readonly authService: AuthService) { }

  init() {
    return new Promise<void>((resolve, reject) => {
      this.authService.refreshToken()?.subscribe();
      setTimeout(() => {
        resolve();
      });
    })
  }
}
