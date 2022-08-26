import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { RoutingPages } from 'src/app/shared/interfaces/routing-pages.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  routingPages: typeof RoutingPages;
  signinForm!: FormGroup;
  invalidCredentials: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.routingPages = RoutingPages;
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    })
  }

  loginUser() {
    this.authService.signin(this.signinForm.value)
      .subscribe(
        err => this.invalidCredentials = true,
      );
  }

}
