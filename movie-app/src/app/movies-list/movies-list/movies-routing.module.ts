import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { MovieCardComponent } from "src/app/movie-card/movie-card.component";
import { MoviesListComponent } from "../movies-list.component";

const routes: Route[] = [
  {
    path: "movies-list",
    loadChildren: () => import("./movies-list.module").then(m => m.MoviesListModule),
    component: MoviesListComponent,
  },
  {
    path: "movie-card",
    loadChildren: () => import("./movies-list.module").then(m => m.MoviesListModule),
    component: MovieCardComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesLisRoutingModule{

}
