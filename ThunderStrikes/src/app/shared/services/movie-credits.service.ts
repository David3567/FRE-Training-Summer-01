import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cast, CastAndCrew } from '../interfaces/cast-and-crew.interface';
import { MovieOptions } from '../interfaces/movie-options.interface';
import { SharedApiDataService } from './shared-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCreditsService {
  private readonly castCount: number = 10;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly sharedApiService: SharedApiDataService,
    ) { }
  
  getCast(id: number): Observable<Cast[]>{
    return this.httpClient.get([this.sharedApiService.baseUrl, id, MovieOptions.Cast].join("/"), { headers: this.sharedApiService.httpHeaders }).pipe(
      <any>map((data: CastAndCrew) => {
        const cast = data.cast.slice(0, this.castCount);
        cast.map(data => {
          data.profile_path = this.sharedApiService.getActorImageUrl(data.profile_path);
          return data;
        });
        return cast;
      })
    );
  }
}
