import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeComponent } from './upgrade.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: UpgradeComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class UpgradeModule {}
