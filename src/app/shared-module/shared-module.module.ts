import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, SharedModuleRoutingModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class SharedModuleModule {}
