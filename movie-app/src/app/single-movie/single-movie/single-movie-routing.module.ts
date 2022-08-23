import { NgModule } from "@angular/core";
import { NgControl } from "@angular/forms";
import { RouterModule ,Routes} from '@angular/router';
import { OverviewComponent} from "../overview/overview.component"; 
import { PhotosComponent } from "../photos/photos.component";
import { VideosComponent } from "../videos/videos.component";
import { SingleMovieComponent } from "../single-movie.component";
import { CommonModule } from '@angular/common';
// import{SingleMovieRouterModule} from '../single-movie-routing.module'



const routes: Routes = [
   {
    path: "single-movie", component: SingleMovieComponent,
    loadChildren: () => import("./single-movie.module").then(m => m.SingleMovieModule)

  },
  // {
  //   path: "overview", component: OverviewComponent,
  //   loadChildren: () => import("./overview/overview.module").then(m => m.OverviewModule)

  // },
  // {
  //   path: "photos", component: PhotosComponent,
  //  loadChildren: () => import("./photos/photos.module").then(m => m.PhotosModule)

  // },
  // {
  //   path: "videos", component: VideosComponent,
  //   loadChildren: () => import("./videos/videos.module").then(m => m.VideosModule)

  // },
 
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  
  exports: [RouterModule],
  
})
export class SingleMovieRoutingModule{

}
