import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
})
export class LoginInputComponent implements OnInit {
  @Input()
    control!: FormControl;

  @Input()
    label!: string;

  // eslint-disable-next-line no-empty-function
  constructor() { }

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
