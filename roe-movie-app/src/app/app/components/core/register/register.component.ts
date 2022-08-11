import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { createPasswordStrengthValidator, createPasswordMatchValidator } from '../../../services/passwordvalidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  counter : number = 0;
  selected : string = '';
  error: any = {
    password: null,
    confirmPassword: null,
    email: null,
    username: null,
    empty: null
  }
  person: any = {
    email: null,
    password : null,
    confirmPassword: null,
    username : null
  }

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
        updateOn: 'blur'
      }],
      password: ['', {
        validators: [
          Validators. required,
          Validators.minLength(8),
          createPasswordStrengthValidator()
        ],
        updateOn: 'blur',
      }
      ],
      username: ['', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur',
      }],
      confirmPassword: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          createPasswordMatchValidator(this)
        ],
        updateOn: 'blur',
      }]
    });
  }

  submit() {
    Object.values(this.person).every(val => val === null || val === '' ?
      this.error.empty = 'empty' :
    Object.values(this.registerForm.controls).every(val => val.errors === null ? true : false) ? this.counter++ : Object.keys(this.person).forEach(key => this.person[key] === null ? this.error[key] = this.registerForm.controls[key].errors : null) )
  }

  incrementCount(): void{
    this.counter++
  }

  setEmail(): void {
    this.error.email = this.registerForm.controls['email'].errors;
    this.person.email = this.registerForm.controls['email'].value;
  }

  setPassword() {
    this.error.password = this.registerForm.controls['password'].errors;
    this.person.password = this.registerForm.controls['password'].value;
  }

  setUserName() {
    this.error.username = this.registerForm.controls['username'].errors
    this.person.username = this.registerForm.controls['username'].value;
  }

  setPasswordConfirm() {
    this.error.confirmPassword = this.registerForm.controls['confirmPassword'].errors;
    this.person.confirmPassword = this.registerForm.controls['confirmPassword'].value;
  }

  toggleSelect(e: MouseEvent): void {
    this.selected = (e.target as HTMLElement).innerText.toLowerCase();
  }

}
