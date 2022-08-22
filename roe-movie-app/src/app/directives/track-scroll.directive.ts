import {
  Directive,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { MovielistComponent } from '../components/core/movielist/movielist.component';

@Directive({
  selector: '[appTrackScroll]',
  host: { '(window:scroll)': 'track($event)' },
})
export class TrackScrollDirective {
  public initial_up: number = 0;
  @Output() direction: EventEmitter<string> = new EventEmitter();
  constructor(private com: MovielistComponent) {}
  track($event: Event) {
    if (window.pageYOffset > this.initial_up + 1500) {
      this.initial_up = window.pageYOffset;
      this.direction.emit('up');
    } else if (window.pageYOffset < this.initial_up - 1500) {
      this.initial_up = window.pageYOffset;
      this.direction.emit('down');
    }
  }
}
