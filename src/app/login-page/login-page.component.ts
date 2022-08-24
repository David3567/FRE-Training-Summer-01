import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });
  signedIn!: boolean;
  signedInInfo: any;

  // eslint-disable-next-line no-empty-function
  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}

  // eslint-disable-next-line class-methods-use-this
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.signin(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/movies');
      },
      error: (error) => {
        console.log(error);
        this.loginForm.setErrors({ credentials: true });
      },
    });
    this.authService.signedin$.subscribe((val) => {
      this.signedIn = val;
    });
    console.log(this.signedIn);
    this.authService.userAuthObs$.subscribe((info) => {
      this.signedInInfo = info;
      console.log(info);
    });
    // console.log(this.signedInInfo);
  }
}
