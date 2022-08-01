import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() movies$: any;

}
