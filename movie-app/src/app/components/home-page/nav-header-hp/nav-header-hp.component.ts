import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-header-hp',
  templateUrl: './nav-header-hp.component.html',
  styleUrls: ['./nav-header-hp.component.css'],
})
export class NavHeaderHPComponent implements OnInit {
  @Output() signBtn = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  signIn() {
    this.signBtn.emit('Click on login');
  }
}
