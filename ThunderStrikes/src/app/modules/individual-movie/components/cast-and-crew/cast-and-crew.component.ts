import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/interfaces/cast-and-crew.interface';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { MovieCreditsService } from 'src/app/shared/services/movie-credits.service';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {
  @Input() movie!: MovieDetails;
  cast$!: Observable<Cast[]>;
  constructor(private readonly movieCreditsService: MovieCreditsService) {
   }

  ngOnInit(): void {
    this.cast$ = this.movieCreditsService.getCast(this.movie.id);
  }

}
