import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('emailRegis') emailRegis?: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onClickGTR(recall: any) {
    console.log('regis');
    console.log(recall);
  }
  onClickSI(recall: any) {
    console.log('login');
    console.log(recall);
  }
}
