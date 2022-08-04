import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
  @Input()
  control!: FormControl;
  @Input()
  label!: string;
  constructor() { }

  ngOnInit(): void {
  }
  showErrors(){
    const {dirty, touched, errors} = this.control
    return dirty && touched && errors
  }
}
