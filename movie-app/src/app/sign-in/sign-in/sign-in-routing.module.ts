import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SignInComponent } from "../sign-in.component";


@NgModule({
  imports: [
    RouterModule.forChild([{
      path: "sign-in",
      component: SignInComponent,
      loadChildren: () => import("./sign-in.module").then(m => m.SignInModule),
     
    }])
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
