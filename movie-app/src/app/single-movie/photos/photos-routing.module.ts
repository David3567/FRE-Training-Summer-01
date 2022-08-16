import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent} from './photos.component'

const routes: Routes = [
  {
    path: "photos", component: PhotosComponent,
   loadChildren: () => import("./photos.module").then(m => m.PhotosModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
