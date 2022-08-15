import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.services';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;

  get username () {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      role: "USER",
      tmdb_key: "ajdnowfipnwdjpawdfefsefa"
    })
  }

  registerUser(): void{
    console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe();
    this.router.navigate(["movie-dashboard"])
  }
}
