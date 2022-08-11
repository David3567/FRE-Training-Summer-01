import { Component, OnInit } from '@angular/core';
import { pswduppercase, pswdnumeric, pswdlowercase, passwordMatch } from '../../../services/passwordvalidator';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  counter : number = 0;
  selected : string = '';

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
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
          pswduppercase(),
          pswdnumeric(),
          pswdlowercase()
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
          passwordMatch()
        ],
        updateOn: 'blur',
      }]
    });
  }


  submit() {
    Object.values(this.person).every(val => val === null || val === '' ?
      this.error.empty = 'empty' :
    Object.values(this.registerForm.controls).every(val => val.errors === null ? true : false) ? this.counter++ : Object.keys(this.person).forEach(key => this.person[key] === null ? this.error[key] = this.registerForm.controls[key].errors : null) )

  onSubmit() {
    console.log(this.registerForm)
    this.registerForm.valid ? this.counter++ : null;
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
