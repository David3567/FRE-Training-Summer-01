import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyService } from './lazy.service';

const routes: Routes = [{ path: '', component: LazyComponent }];

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [LazyService],
})
export class LazyModule {}
