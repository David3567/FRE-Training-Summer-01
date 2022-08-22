import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  //validators for form controls
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  //getters for reactive form
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  //submitting userInfo to login api
  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Please enter a valid email or password');
      return;
    } else {
      this.auth
        .login(this.loginForm.value)
        .subscribe((res) => console.log(res));
    }
  }
}
