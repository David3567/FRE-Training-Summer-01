import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent} from './videos.component'

const routes: Routes = [
{
    path: "videos", component: VideosComponent,
    loadChildren: () => import("./videos.module").then(m => m.VideosModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
