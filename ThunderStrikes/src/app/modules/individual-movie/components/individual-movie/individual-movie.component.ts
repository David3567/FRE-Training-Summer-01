import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSize } from 'src/app/shared/interfaces/image-size.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';
import { SharedApiDataService } from 'src/app/shared/services/shared-api-data.service';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';

@Component({
  selector: 'app-individual-movie',
  templateUrl: './individual-movie.component.html',
  styleUrls: ['./individual-movie.component.scss']
})
export class IndividualMovieComponent implements OnInit {
  movie!: MovieDetails;
  readonly posterSize: ImageSize;
  readonly screenSize: string;
  properImage: string = "";
  constructor(
    private readonly tmdbService: TmdbApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sharedApiService: SharedApiDataService,
    private readonly screenSizeService: ScreenSizeService,
  ) {
    this.posterSize = this.sharedApiService.posterSize;
    this.screenSize = this.screenSizeService.screenSizeUsed;
    this.activatedRoute.paramMap.subscribe(params => {
      const id: string = params.get("id") as string;
      this.tmdbService.getMovie(id).subscribe(data => {
        this.movie = data;
        this.properImage = this.screenSize === "mobile" ? this.movie.poster_path : this.movie.backdrop_path;
      });
    });
  }

  ngOnInit(): void {
  }

}
