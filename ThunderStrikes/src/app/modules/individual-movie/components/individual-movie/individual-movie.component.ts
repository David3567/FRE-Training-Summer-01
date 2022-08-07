import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';

@Component({
  selector: 'app-individual-movie',
  templateUrl: './individual-movie.component.html',
  styleUrls: ['./individual-movie.component.scss']
})
export class IndividualMovieComponent implements OnInit {
  movie!: MovieDetails;
  constructor(
    private readonly tmdbService: TmdbApiService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      const id: string = params.get("id") as string;
      this.tmdbService.getMovie(Number(id)).subscribe(data => {
        this.movie = data;
      });
    });
  }

  ngOnInit(): void {
  }

}
