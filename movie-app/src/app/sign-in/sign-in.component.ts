import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
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

  showPassword(): void {
    this.isHidden = !this.isHidden;
  }

  onLogin(e: any): void {
    this.userService.signIn(this.signInForm.value).subscribe(console.log);
  }
}
