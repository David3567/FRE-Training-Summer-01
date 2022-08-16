import { Component, Input, OnInit } from '@angular/core';
import { PosterSizes } from 'src/app/shared/interfaces/image-size.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { ImageSizesService } from 'src/app/shared/services/image-sizes.service';

@Component({
  selector: 'app-search-movie-item',
  templateUrl: './search-movie-item.component.html',
  styleUrls: ['./search-movie-item.component.scss']
})
export class SearchMovieItemComponent implements OnInit {
  @Input() movieList!: MovieDetails[];
  readonly posterSizes: number[] = PosterSizes;
  constructor(private readonly imageSizeService: ImageSizesService) { }

  ngOnInit(): void {
  }

  getPosterSize(movie: MovieDetails, width: number){
    return this.imageSizeService.getPosterSize(movie, width);
  }

  getRouteLink(movie: MovieDetails){
    return `/movie/${movie.id}`;
  }
}
