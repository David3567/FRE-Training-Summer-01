import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatchPassword } from '../auth/validators/match-password';
import { UniqueEmail } from '../auth/validators/unique-email';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { SignUpCredentials } from '../interfaces/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() registerEvent = new EventEmitter();
  @Input() serverErrorMsg: string | null = null;
  apiKey = environment.apiKey;

  // registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private matchPassword: MatchPassword,
    private uniqueEmail: UniqueEmail,
    private router: Router
  ) {}
  registerForm: any = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]/),
      ]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.uniqueEmail.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  onSubmit() {
    const { password, email, username } = this.registerForm.value;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .signup({
        password,
        email,
        role: 'USER',
        tmdb_key: this.apiKey,
        username,
      })
      .subscribe({
        next: (_) => {
          this.router.navigateByUrl('/movies');
        },
        error: (err) => {
          if (!err.status) {
            this.registerForm.setErrors({ noConnection: true });
          } else {
            this.registerForm.setErrors({ unknownError: true });
          }
        },
      });
  }
}
