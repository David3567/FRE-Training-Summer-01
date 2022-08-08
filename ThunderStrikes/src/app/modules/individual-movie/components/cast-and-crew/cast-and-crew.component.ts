import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/interfaces/cast-and-crew.interface';
import { ImageSize } from 'src/app/shared/interfaces/image-size.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { MovieCreditsService } from 'src/app/shared/services/movie-credits.service';
import { SharedApiDataService } from 'src/app/shared/services/shared-api-data.service';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {
  @Input() movie!: MovieDetails;
  cast$!: Observable<Cast[]>;
  readonly actorImageSize: ImageSize;
  constructor(
    private readonly movieCreditsService: MovieCreditsService,
    private readonly sharedApiService: SharedApiDataService,) {
    this.actorImageSize = this.sharedApiService.actorImageSize;

   }

  ngOnInit(): void {
    this.cast$ = this.movieCreditsService.getCast(this.movie.id);
  }

}
