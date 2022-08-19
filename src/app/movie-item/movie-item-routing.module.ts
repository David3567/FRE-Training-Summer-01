import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieItemResolverService } from './movie-item-resolver.service';
import { MovieItemComponent } from './movie-item/movie-item.component';

const routes: Routes = [
  {
    path: '',
    component: MovieItemComponent,
    resolve: { keys: MovieItemResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieItemRoutingModule {}
