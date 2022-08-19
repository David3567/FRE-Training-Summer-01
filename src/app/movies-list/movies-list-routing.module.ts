import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListResolverService } from './movies-list-resolver.service';
import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent,
    resolve: { movies: MoviesListResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule {}
