import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'eager', component: EagerComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'hello' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
