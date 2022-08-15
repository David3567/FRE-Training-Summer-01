import { Component, Input, OnInit } from '@angular/core';
import { Videos } from 'src/app/shared/interfaces/trailer-videos';
import { TmdbApiService } from 'src/app/shared/services/tmdb-api.service';
@Component({
  selector: 'app-trailer-videos',
  templateUrl: './trailer-videos.component.html',
  styleUrls: ['./trailer-videos.component.scss']
})
export class TrailerVideosComponent implements OnInit {
  @Input() movieId!: number;
  private apiLoaded: boolean = false;
  private trailerVideos!: Videos[];
  public videoIndex: number = 0;
  public currentVideoId!: string;
  public showPreviousButton: boolean = false;
  public showNextButton: boolean = true;
  constructor(
    private readonly tmdbApiService: TmdbApiService
  ) { }

  ngOnInit(): void {
    this.tmdbApiService.getVideoTrailers(this.movieId).subscribe(data => {
      this.trailerVideos = data;
      if (this.trailerVideos) {
        this.currentVideoId = this.trailerVideos[this.videoIndex].key;
      }
    });
    if (!this.apiLoaded) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.append(tag);
      this.apiLoaded = true;
    }
  }

  nextVideo() {
    if (this.videoIndex >= (this.trailerVideos.length - 1)) return;
    this.videoIndex++;
    this.updateVideoSelection();
  }
  previousVideo() {
    if (this.videoIndex <= 0) return;
    this.videoIndex--;
    this.updateVideoSelection();
  }

  private updateVideoSelection() {
    this.currentVideoId = this.trailerVideos[this.videoIndex].key;
    this.showPreviousButton = this.videoIndex > 0 ? true : false;
    this.showNextButton = (this.videoIndex >= (this.trailerVideos.length - 1) ? false : true) || this.videoIndex < 1;
  }
}
