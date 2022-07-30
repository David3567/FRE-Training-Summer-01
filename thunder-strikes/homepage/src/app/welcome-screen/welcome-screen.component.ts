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
  scrollHeight: number = 300;
  showingHeader: boolean = false;
  selected: MovieDetails = {
    backdrop_path: "https://image.tmdb.org/t/p/original/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
    overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    poster_path: "https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    title: "Thor: Love and Thunder",
  }

  moviesPlaying$: Observable<MovieDetails[]>;
  constructor(private playingService: NowPlayingService) {
    this.moviesPlaying$ = this.playingService.get();
  }
  // @ViewChild("selectedMovie") selectedMovie!: MovieDetails;
  ngOnInit(): void {
  }

  getData(movie: MovieDetails) {
    this.selected = movie;
  }

  @HostListener('scroll', ['$event'])
  showHeader($event: any) {
    if($event.srcElement.scrollTop >= this.scrollHeight && !this.showingHeader){
      this.showingHeader = true;
      return;
    }
    if($event.srcElement.scrollTop < this.scrollHeight && this.showingHeader){
      this.showingHeader = false;
      return;
    }
  }
}
