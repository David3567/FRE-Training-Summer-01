import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MovieDetails } from '../interfaces/movie-details';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @ViewChild("mainContent", {static: true}) mainContent!: ElementRef;
  @Input() movie!: MovieDetails;
  constructor() { }

  ngOnInit(): void {
  }
  scrollDown(){
    const welcomeScreen = document.querySelector("app-welcome-screen");
    if(welcomeScreen?.scrollTop !== undefined){
      welcomeScreen.scrollTop += 700;
    }
  }
}
