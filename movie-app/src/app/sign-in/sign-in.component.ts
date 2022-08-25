import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  isHidden = true;
  showErrorMess = false;
  signInClicked=false
  validSingIn=false

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', {validators:[Validators.email,Validators.required],updateOn: 'blur'}],
    password: ['', {validators:[Validators.required],updateOn: 'blur'}],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  
  get email() {
    return this.signInForm.get("email");
  }

  get password() {
    return this.signInForm.get("password");
  }
  showPassword(): void {
    this.isHidden = !this.isHidden;
  }
  navigateToRegister() :void{
    this.router.navigate(['/register']);
  }
  onLogin(e: any): void {
    this.signInClicked=true
    if(this.signInForm.valid){
      this.userService.signIn(this.signInForm.value).subscribe((response: any)=>{console.log(response,"")
      response?this.validSingIn=true:this.validSingIn
    });
    }
    
  }
}
