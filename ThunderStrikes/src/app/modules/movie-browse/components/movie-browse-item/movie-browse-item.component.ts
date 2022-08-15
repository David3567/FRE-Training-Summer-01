import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/shared/interfaces/tmdb.interface';

@Component({
  selector: 'app-movie-browse-item',
  templateUrl: './movie-browse-item.component.html',
  styleUrls: ['./movie-browse-item.component.scss']
})
export class MovieBrowseItemComponent implements OnInit {
  @Input() movie!:MovieDetails;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  @HostListener("click")
  onClick(){
    this.router.navigate(['../', 'movie', this.movie.id])
  }
}
