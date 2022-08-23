import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpdatePageComponent } from './user-update-page/user-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserUpdatePageComponent,
    resolve: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUpdateRoutingModule {}
