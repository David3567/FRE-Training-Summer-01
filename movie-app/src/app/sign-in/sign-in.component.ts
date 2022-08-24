import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import { User } from '../interfaces/user.interface';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isHidden = true;
  showErrorMess = false;
  currentUser!: User;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.maxLength(10)]]
  })

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    this.userService.navigateToMovies();
  }

  showPassword(): void {
    this.isHidden = !this.isHidden;
  }

  get email() {
    return this.signInForm.get("email");
  }

  get password() {
    return this.signInForm.get("password");
  }

  onLogin(e: any): void {
    if (!this.userService.checkEmail(this.email!.value)) {
      throw new Error("No such member with this email")
    }
    this.userService.signIn(this.signInForm.value)
      .subscribe((user: any) => {
        console.log(user);
        this.currentUser = user;
      })
  }
}
