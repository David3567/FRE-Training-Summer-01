import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { MovielistRoutingModule } from './movielist-routing.module';
import { MovielistComponent } from './movielist.component';
import { SharedModule} from '../../shared/shared/shared.module'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    MovielistComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovielistRoutingModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    InfiniteScrollModule
  ]
})
export class MovielistModule { }
