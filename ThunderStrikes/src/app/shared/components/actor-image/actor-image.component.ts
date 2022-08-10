import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/cast-and-crew.interface';
import { PosterSizes } from '../../interfaces/image-size.interface';
import { SharedApiDataService } from '../../services/shared-api-data.service';

@Component({
  selector: 'app-actor-image',
  templateUrl: './actor-image.component.html',
  styleUrls: ['./actor-image.component.scss']
})
export class ActorImageComponent implements OnInit {
  posterSizes: number[];
  imageSizes: string = "";
  @Input() actor!: Cast;
  constructor(
    private readonly sharedApiService: SharedApiDataService) {
    this.posterSizes = PosterSizes
  }

  ngOnInit(): void {
  }
  getPosterSize(width: number){
    return this.sharedApiService.getImageSizeUrl(this.actor.profile_path, width);
  }
}
