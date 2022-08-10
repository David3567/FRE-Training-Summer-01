import { Component } from '@angular/core';
import { slideInAnimation } from './animation/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'router';
  pageNum = 0;
  name = '';
}
