import { Component, Input, OnInit } from '@angular/core';
import { BackdropSizes, PosterSizes } from '../../interfaces/image-size.interface';
import { MovieDetails } from '../../interfaces/tmdb.interface';
import { ImageSizesService } from '../../services/image-sizes.service';

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
    private readonly imageSizesService: ImageSizesService
  ) {}

  ngOnInit(): void {
  }
  getPosterSize(width: number){
    return this.imageSizesService.getPosterSize(this.movie, width);
  }

  getBackdropSize(width: number){
    return this.imageSizesService.getBackdropSize(this.movie, width);
  }

  getOriginalBackdrop(){
    return this.imageSizesService.getOriginalBackdrop(this.movie);
  }
}
