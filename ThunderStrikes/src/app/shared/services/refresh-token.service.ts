import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { catchError, of, tap, throwError } from 'rxjs';
import { LocalStorageVariables } from '../interfaces/local-storage-variables';
import { User } from '../interfaces/user.interface';
import { AuthService } from './auth.services';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
  private temporaryUser: User = {
    id: "62fa9b5bcb721235b650dde8",
    username: "victor10g",
    email: "victor5g@icloud.com",
    role: "USE",
    tmdb_key: "ajdnowfipnwdjpawdfefsefa"
  }
  public accessToken: string = "";
  private readonly baseUrl: string = "http://localhost:4231"
  constructor(private readonly httpClient: HttpClient) { }

  refreshToken() {
    // No need to refresh the token if they've never logged in.
    if (!localStorage.getItem(LocalStorageVariables.JWT_TOKEN)) return;
    return this.httpClient.post<{ accessToken: string }>([this.baseUrl, "auth", "refresh-token"].join("/"), this.temporaryUser).pipe(
      catchError(error => {
        console.error("User credentials are no longer valid. Signing out.");
        this.signOut();
        return of();
      }),
      tap(token => {
        this.updateToken(token.accessToken);
      })
    );
  }

  private signOut() {
    localStorage.removeItem("jwt_token");
  }

  updateToken(newToken: string){
    localStorage.setItem(LocalStorageVariables.JWT_TOKEN, newToken);
    console.log("Successfully renewed token.");
  }
}

