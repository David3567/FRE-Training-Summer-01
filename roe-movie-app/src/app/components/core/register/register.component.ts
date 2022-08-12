import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { pswduppercase, pswdnumeric, pswdlowercase, passwordMatch } from '../../../services/passwordvalidator';


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

  onSubmit() {
    console.log(this.registerForm)
    this.registerForm.valid ? this.counter++ : null;
  }

  incrementCount(): void{
    this.counter++
  }

  toggleSelect(e: MouseEvent): void {
    this.selected = (e.target as HTMLElement).innerText.toLowerCase();
  }

}