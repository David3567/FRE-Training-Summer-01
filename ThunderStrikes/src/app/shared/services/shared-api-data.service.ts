import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageSize } from '../interfaces/image-size.interface';
import { MovieDetails } from '../interfaces/tmdb.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedApiDataService {
  readonly baseUrl: string = "https://api.themoviedb.org/3/movie";
  readonly discoverUrl: string = "https://api.themoviedb.org/3/discover"
  readonly searchMovieUrl: string = "https://api.themoviedb.org/3/search/";
  public apiToken: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGY0NGYxZDUyZjk0OTNiNjdkZjQzYWQ2MTk0MWQ0YiIsInN1YiI6IjYyY2ZjNzQ0MGI1ZmQ2MDA1Mzg3OTllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fslcsTZH_p1LHoiIFiOwqUYgkev98ZoFxOg3Epf9mlc";
  readonly imageUrlPath: string = "https://image.tmdb.org/t/p";
  readonly posterSize: ImageSize = {width: 780, height: 1170};
  readonly actorImageSize: ImageSize = {width: 342, height: 513};
  readonly backdropWidth: ImageSize = {width: 1280, height: 720};
  readonly httpHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.apiToken,
    'Content-Type': 'application/json;charset=utf-8'
  });
  constructor() { }

  getImageSizeUrl(imagePath: string, width: number){
    return this.imageUrlPath + "/w" + width + imagePath;
  }
  getOriginalImage(imagePath: string){
    return this.imageUrlPath + "/original" + imagePath;
  }
  // option for original quality because the images
  // look bad on the movie page. we don't want
  // the original quality on all of them to save bandwidth
  // when displayed on a movie list.
  setMovieImageUrl(movie: MovieDetails, original?: boolean): void {
    if (original) {
      movie.poster_path = [this.imageUrlPath, "original", movie.poster_path].join("/");
      movie.backdrop_path = [this.imageUrlPath, "original" + movie.backdrop_path].join("/");
    } else {
      movie.poster_path = this.imageUrlPath + "/w" + this.posterSize.width + movie.poster_path;
      movie.backdrop_path = this.imageUrlPath + "/w" + this.backdropWidth.width + movie.backdrop_path;
    }
  }

}