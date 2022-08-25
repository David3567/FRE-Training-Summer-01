import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

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
