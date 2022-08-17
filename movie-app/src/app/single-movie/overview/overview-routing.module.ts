import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent} from './overview.component'

const routes: Routes = [
  {
    path: "overview", component: OverviewComponent,
    loadChildren: () => import("./overview.module").then(m => m.OverviewModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
