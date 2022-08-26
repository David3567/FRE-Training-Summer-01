import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  currentUsers: User[] = [];
  signUpForm!: FormGroup;//
  emailExists: boolean = false;
  signUpClicked: boolean = false;
  

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', {validators:[Validators.email,Validators.required],updateOn: 'blur'}],
      password: ['', {validators:[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")],updateOn: 'blur'}],
      repeatPassword: ['', {validators:[Validators.required],updateOn: 'blur'}],
      username: ['', {validators:[Validators.maxLength(10), Validators.minLength(4)],updateOn: 'blur'}]
    },{
      validators: [this.checkPasswords],
    })
   
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

  checkPasswords(group: FormGroup): ValidationErrors | null {
    const password1=group.get("password")?.value
    const password2=group.get("repeatPassword")?.value
    if (password1 !==password2){
      return {nomatch:true}
    }
    return null
  }
  navigateToSignIn() :void{
    this.router.navigate(['sign-in']);
  }
  onSignUp(): void {
    if(!this.signUpForm.valid){
      this.signUpForm.markAllAsTouched
     
    }
    this.signUpClicked=true;
    this.checkEmail();
    

    if (this.signUpForm.valid) {
      this.signUpClicked=false;
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
