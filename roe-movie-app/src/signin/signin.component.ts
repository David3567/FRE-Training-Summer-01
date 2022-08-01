import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  show: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  password() {
    this.show = !this.show;
  }
}