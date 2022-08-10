import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSize } from 'src/app/shared/interfaces/image-size.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { SharedApiDataService } from 'src/app/shared/services/shared-api-data.service';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';

@Component({
  selector: 'app-individual-movie',
  templateUrl: './individual-movie.component.html',
  styleUrls: ['./individual-movie.component.scss'],
})
export class IndividualMovieComponent implements OnInit {
  movie!: MovieDetails;
  readonly posterSize: ImageSize;
  readonly backdropSize: ImageSize;
  constructor(
    private readonly tmdbService: TmdbApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sharedApiService: SharedApiDataService,
  ) {
    this.posterSize = this.sharedApiService.posterSize;
    this.backdropSize = this.sharedApiService.backdropWidth;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id: string = params.get("id") as string;
      this.tmdbService.getMovie(id).subscribe(data => {
        this.movie = data;
      });
    })
  }


}
