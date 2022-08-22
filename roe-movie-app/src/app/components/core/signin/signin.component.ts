import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup | any;
  show: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService,) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
      )]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const credentialLogin = this.loginForm.value;
    this.authService.login(credentialLogin).subscribe({
      next: (val) => (
        localStorage.setItem('user', val.accessToken), this.router.navigate(['movielist'])),
      error: (e) =>
        alert(e.error.message),
      complete: () =>
        console.log('complete')
    });
  }

  showPassword() {
    this.show = !this.show;
  }
}
