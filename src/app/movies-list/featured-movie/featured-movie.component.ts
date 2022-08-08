import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css'],
})
export class FeaturedMovieComponent implements OnInit {
  @Input() movieList: any;
  constructor() {}

  ngOnInit(): void {}
}
