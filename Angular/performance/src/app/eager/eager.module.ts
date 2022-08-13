import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from './eager.component';
import { EagerService } from './eager.service';

@NgModule({
  declarations: [EagerComponent],
  imports: [CommonModule],
  providers: [EagerService],
})
export class EagerModule {}
