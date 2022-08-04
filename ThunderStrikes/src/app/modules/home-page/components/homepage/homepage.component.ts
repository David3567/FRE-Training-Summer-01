import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './interfaces/movie-details';
import { NowPlayingService } from './services/now-playing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  moviesPlaying$: Observable<MovieDetails[]>;
  constructor(private playingService: NowPlayingService) {
    this.moviesPlaying$ = this.playingService.get();
  }

  ngOnInit(): void {
  }

}
