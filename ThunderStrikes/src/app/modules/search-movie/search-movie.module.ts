import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SearchMovieItemComponent } from './components/search-movie-item/search-movie-item.component';
import { FormsModule } from '@angular/forms';
import { MovieListResolver } from './resolvers/movie-list.resolver';



const routes: Routes = [
  { path: "", component: SearchMoviesComponent },
  { path: ":searchInput/:page", 
   component: SearchMoviesComponent,
   resolve: {
     movieList: MovieListResolver
   }
  },
  { path: ":searchInput", redirectTo: "/search/:searchInput/1"},
];
@NgModule({
  declarations: [
    SearchMoviesComponent,
    SearchMovieItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class SearchMovieModule { }



