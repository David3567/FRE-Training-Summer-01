import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  myForm!: FormGroup;

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.authService.signin(this.myForm.value).subscribe(console.log);
  }
}

// emailErrorMessage: string = '';
//   passwordErrorMessage: string = '';
//   email: string = '';
//   password: string = '';
//   isChecked: boolean = false;

//   validateEmail() {
//     const email = this.email;
//     if (email === '') {
//       this.emailErrorMessage = 'Please enter a valid email or phone number.';
//     }
//   }

//   validatePassword() {
//     const password = this.password;
//     if (password === '') {
//       this.passwordErrorMessage =
//         'Your password must contain between 4 and 60 characters.';
//     }
//   }

//   onChange() {
//     if (this.isChecked) {
//       console.log('remember!');
//     } else {
//       console.log('nothing');
//     }
//   }

