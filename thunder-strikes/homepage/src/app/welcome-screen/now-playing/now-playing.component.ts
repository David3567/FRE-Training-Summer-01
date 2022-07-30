import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';
import { NowPlayingService } from '../services/now-playing.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() movie!: MovieDetails;
}
