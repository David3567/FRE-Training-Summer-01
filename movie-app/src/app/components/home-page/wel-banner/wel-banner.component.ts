import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-wel-banner',
  templateUrl: './wel-banner.component.html',
  styleUrls: ['./wel-banner.component.css'],
})
export class WelBannerComponent implements OnInit {
  @Output() regisBtn = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  regisClick() {
    this.regisBtn.emit('Click on regis');
  }
}
