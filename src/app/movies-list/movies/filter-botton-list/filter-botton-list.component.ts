import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-botton-list',
  templateUrl: './filter-botton-list.component.html',
  styleUrls: ['./filter-botton-list.component.css'],
})
export class FilterBottonListComponent implements OnInit {
  @Input() movieList: any;
  filterBtns = [];
  constructor() {}

  ngOnInit(): void {}
}
