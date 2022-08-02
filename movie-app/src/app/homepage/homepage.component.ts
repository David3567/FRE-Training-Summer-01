import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homeBgimagePath = "assets/homepage_background_img.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
