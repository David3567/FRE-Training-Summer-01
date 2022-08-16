import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  movieId: any;
  videoKey: any;

  constructor(
    private videoService: MovieService, // currently loaded route
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieId = this.activateRoute.snapshot.params['id'];
    this.getVideo();
  }

  getVideo() {
    this.videoService.getVideo(this.movieId).subscribe((video) => {
      this.videoKey = video[0].key;
      console.log('Video Key:' + this.videoKey);
    });
  }
}
