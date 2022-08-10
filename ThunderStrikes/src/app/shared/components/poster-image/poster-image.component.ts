import { Component, Input, OnInit } from '@angular/core';
import { BackdropSizes, PosterSizes } from '../../interfaces/image-size.interface';
import { MovieDetails } from '../../interfaces/tmdb.interface';
import { SharedApiDataService } from '../../services/shared-api-data.service';

@Component({
  selector: 'app-poster-image',
  templateUrl: './poster-image.component.html',
  styleUrls: ['./poster-image.component.scss']
})
export class PosterImageComponent implements OnInit {
  @Input() movie!: MovieDetails;
  readonly posterSizes: number[] = PosterSizes;
  readonly backdropSizes: number[] = BackdropSizes;
  constructor(
    private readonly sharedApiService: SharedApiDataService,
  ) {}

  ngOnInit(): void {
  }
  getPosterSize(width: number){
    return this.sharedApiService.getImageSizeUrl(this.movie.poster_path, width);
  }

  getBackdropSize(width: number){
    return this.sharedApiService.getImageSizeUrl(this.movie.backdrop_path, width);
  }

  getOriginalBackdrop(){
    return this.sharedApiService.getOriginalImage(this.movie.backdrop_path);
  }
}
