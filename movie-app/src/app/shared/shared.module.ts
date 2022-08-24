import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SubscriptionComponent],
  exports: [SubscriptionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
