import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {
  @Input() movies$: any;
  constructor() { }

  ngOnInit(): void {
  }

}
