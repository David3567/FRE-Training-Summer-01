import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieItemComponent } from './movie-item/movie-item.component';

const routes: Routes = [
  {
    path: '',
    component: MovieItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieItemRoutingModule {}
