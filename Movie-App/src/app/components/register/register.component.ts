import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  readonly API_KEY: string = '3b12cfa2e8e41ce85be82944f8b7e697';
  readonly role: string = 'USER';
  word: string = 'register';
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
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
      // confirmPassword: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(8),
      //     Validators.maxLength(16),
      //   ],
      // ],
      role: this.role,
      tmdb_key: this.API_KEY,
    });
  }

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onSubmit() {
    // if (this.password != this.confirmPassword) {
    //   console.log(this.password, this.confirmPassword);
    //   console.log("Passwords don't match");
    //   return;
    // }
    // if (!this.registerForm.valid) {
    //   console.log('Please enter a valid email or password');
    //   return;
    // }

    this.auth.register(this.registerForm.value);
  }
}
