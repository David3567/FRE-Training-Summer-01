import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NotAuthorizedUserGuard } from "src/app/guards/not-authorized-user.guard";
import { RegisterPageComponent } from "../register-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "register", component: RegisterPageComponent,
        loadChildren: () => import("./register.module").then(m => m.RegisterModule),
        // canDeactivate: [NotAuthorizedUserGuard],
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterPageRoutingModule {}
