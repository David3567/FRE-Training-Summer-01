import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MovieDetails } from '../welcome-screen/interfaces/movie-details';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
