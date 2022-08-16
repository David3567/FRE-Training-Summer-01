import { Injectable } from '@angular/core';
import { MovieDetails } from '../interfaces/tmdb.interface';
import { SharedApiDataService } from './shared-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class ImageSizesService {
  constructor(private readonly sharedApiService: SharedApiDataService) { }

  getPosterSize(movie: MovieDetails, width: number){
    return this.sharedApiService.getImageSizeUrl(movie.poster_path, width);
  }

  getBackdropSize(movie: MovieDetails,width: number){
    return this.sharedApiService.getImageSizeUrl(movie.backdrop_path, width);
  }

  getOriginalBackdrop(movie: MovieDetails){
    return this.sharedApiService.getOriginalImage(movie.backdrop_path);
  }
}


