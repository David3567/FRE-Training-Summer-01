import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output('selectUpcoming') selectUpcoming: EventEmitter<any> =
    new EventEmitter();
  @Output('selectNowPlaying') selectNowPlaying: EventEmitter<any> =
    new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  returnhome() {
    this.router.navigate(['/movielist']);
  }
}
