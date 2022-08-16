import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {   PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos.component'

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [PhotosComponent]
})
export class PhotosModule { }
