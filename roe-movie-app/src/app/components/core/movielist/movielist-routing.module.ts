import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationUserGuard } from './authenticationuser.guard'
import { MovielistUserComponent } from './movielist-user/movielist-user.component'
const routes: Routes = [
  {
    path: '',
    component: MovielistComponent,
    canActivate: [AuthenticationGuard],
  },{
        path: 'movielist_user',
        component: MovielistUserComponent,
        canActivate: [AuthenticationUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovielistRoutingModule {}
