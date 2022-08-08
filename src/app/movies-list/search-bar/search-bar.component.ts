import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faSearch,
  faSliders,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  faSearch = faSearch;
  faSliders = faSliders;
  faCircleUser = faCircleUser;
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
