import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'homepage', component: HomePageComponent,
      // loadChildren: () => import("./homepage.module").then(m => m.HomepageModule)
    }
  ])],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
