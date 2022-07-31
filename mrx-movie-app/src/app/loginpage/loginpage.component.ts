import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  emailErrorMessage: string = 'Please enter a valid email or phone number.';
  passwordErrorMessage: string =
    'Your password must contain between 4 and 60 characters.';
  constructor() {}

  ngOnInit(): void {}
}
