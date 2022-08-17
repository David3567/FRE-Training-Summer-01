import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent implements OnInit {
  @Input() videoKey: any;

  constructor() {}

  ngOnInit() {
    console.log(this.videoKey);
  }
}
