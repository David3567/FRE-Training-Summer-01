import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  currentUsers: User[] = [];
  signUpForm!: FormGroup;//
  emailExists: boolean = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
      username: ['', [Validators.maxLength(10), Validators.minLength(4)]]
    });

    this.userService.navigateToMovies()
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get username() {
    return this.signUpForm.get("username");
  }

  get repeatPassword() {
    return this.signUpForm.get("repeatPassword");
  }

  checkEmail() {
    this.userService.checkEmail(this.email?.value).subscribe(e => {
      this.emailExists = e;
    })
  }

  onSignUp(): void {
    this.checkEmail();

    if (this.emailExists) {
      alert("Email already exists");
      return;
    }

    if (this.password?.value === this.repeatPassword?.value) {
      let userInfo: User =
      {
        username:  this.username?.value,
        email: this.email?.value,
        password:  this.password?.value,
        role: "USER",
        tmdb_key: '7979b0e432796fe7fa957d6fbbeb0835'
      }
      this.userService.register(userInfo).subscribe(console.log);
    } else {
      console.log("passwords don't match")
    }
  }
}
