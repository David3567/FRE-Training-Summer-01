import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader } from '@angular/material/expansion';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
