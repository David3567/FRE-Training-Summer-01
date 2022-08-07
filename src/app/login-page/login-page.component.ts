import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    rememberMe: new FormControl(false),
  });

  // eslint-disable-next-line no-empty-function
  constructor() {}

  get email() {
    return this.loginForm.get('email');
  }

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}

  // eslint-disable-next-line class-methods-use-this
  onSubmit() {
    console.log('form was submitted');
  }
}
