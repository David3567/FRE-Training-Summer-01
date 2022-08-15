import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  myForm!: FormGroup;

  get username() {
    return this.myForm.get('username');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: 'USER',
      tmdb_key: '5fa0925a4c1bf9781d30e90efd4e99ee'
    });
  }

  submitForm(){
    console.log(this.myForm.value);
    this.authService.register(this.myForm.value)
    .pipe()
    .subscribe({
      next: () => {
        alert('Welcome '+ this.username?.value + '!');
        console.log(this.myForm.value);
        this.router.navigate(['/login']);
      },
      error: error => {
         console.log(error);
      }
  });
  }
}
