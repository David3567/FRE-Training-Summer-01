import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {   OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component'

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
