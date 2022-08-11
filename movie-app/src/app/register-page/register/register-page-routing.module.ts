import { NgModule } from "@angular/core";
import { NgControl } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from "../register-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "register", component: RegisterPageComponent,
        loadChildren: () => import("./register.module").then(m => m.RegisterModule)

      },
    ])
  ],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule {

}
