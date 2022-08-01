import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}

// export class NgbdCarouselBasic {
//   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
// }
