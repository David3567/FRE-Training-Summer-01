
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})

export class SignInComponent implements OnInit {

  isHidden = true;
  showErrorMess = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.maxLength(10)]],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //GETTING THE CURRENTLY LOGGED IN MEMBER
    this.userService.currentUser$.subscribe(res => {
      console.log("Inside the sign in component (nginit): ");
      console.log(res);
    })
  }

  showPassword(): void {
    this.isHidden = !this.isHidden;
  }

  onLogin(e: any): void {

    this.userService.signIn(this.signInForm.value)
      .subscribe((user: any) => {
      console.log("Inside the sign in component (onLogin): ");
        console.log(user,"user............");
      })

  }
}
