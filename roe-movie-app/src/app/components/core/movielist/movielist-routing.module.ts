import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { AuthenticationGuard } from './authentication.guard'
const routes: Routes = [{ path: '', component: MovielistComponent, canActivate:[AuthenticationGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovielistRoutingModule { }
