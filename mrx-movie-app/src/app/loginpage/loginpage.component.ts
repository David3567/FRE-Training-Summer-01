import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  email: string = '';
  password: string = '';
  isChecked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  validateEmail() {
    const email = this.email;
    if (email === '') {
      this.emailErrorMessage = 'Please enter a valid email or phone number.';
    }
  }

  validatePassword() {
    const password = this.password;
    if (password === '') {
      this.passwordErrorMessage =
        'Your password must contain between 4 and 60 characters.';
    }
  }

  onChange() {
    if (this.isChecked) {
      console.log('remember!');
    } else {
      console.log('nothing');
    }
  }

  submitForm() {
    this.validateEmail();
    this.validatePassword();
    this.onChange();
  }
}
