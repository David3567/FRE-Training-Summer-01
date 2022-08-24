import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SignInComponent } from "../sign-in.component";
import { NotAuthorizedUserGuard } from '../../guards/not-authorized-user.guard';


@NgModule({
  imports: [
    RouterModule.forChild([{
      path: "sign-in",
      component: SignInComponent,
      canDeactivate: [NotAuthorizedUserGuard],
      loadChildren: () => import("./sign-in.module").then(m => m.SignInModule),
    }]),
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
