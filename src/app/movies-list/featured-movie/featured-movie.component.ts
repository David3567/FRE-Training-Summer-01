import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css'],
})
export class FeaturedMovieComponent implements OnInit {
  @Input() featured: any;
  constructor() {}

  ngOnInit(): void {}
}
