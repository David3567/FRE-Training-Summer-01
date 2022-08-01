import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './interfaces/movie-details';
import { NowPlayingService } from './services/now-playing.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})

export class WelcomeScreenComponent implements OnInit {

  moviesPlaying$: Observable<MovieDetails[]>;
  constructor(private playingService: NowPlayingService) {
    this.moviesPlaying$ = this.playingService.get();
  }
  ngOnInit(): void {
  }

}
