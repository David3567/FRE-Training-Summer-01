import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { pswduppercase, pswdnumeric, pswdlowercase, passwordMatch } from '../../../services/passwordvalidator';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authservice.service';
import { ViewportScroller } from '@angular/common';
import { __values } from 'tslib';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  counter: number = 0;
  selected: string = '';
  roles = [
    'USER',
    'ADMIN',
    'SUPERUSER',
  ]

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get role(): FormControl {
    return this.registerForm.get('role') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private viewportScroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
        ],
        updateOn: 'blur'
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          pswduppercase(),
          pswdnumeric(),
          pswdlowercase()
        ],
        updateOn: 'blur',
      }
      ],
      username: ['', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur',
      }],
      confirmPassword: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          passwordMatch()
        ],
        updateOn: 'change',
      }],
      role: ['', {
        validators: [
          Validators.required,
        ],
        updateOn: 'change',
      }
      ]
    });

    this.registerForm.patchValue(
      { email: this.route.snapshot.paramMap.get('email') }
    )
  }

  onSubmit() {
    const credentialRegister: User = {
      email: this.email?.value,
      username: this.username?.value,
      password: this.password?.value,
      role: this.role.value,
      tmdb_key: ""
    }
    console.log(credentialRegister)
    this.authService.register(credentialRegister).subscribe({
      next: () => this.counter++,
      error: () => alert(`Hmmm. That didn't seem to work. Try again.`),
      // complete: () => console.log('complete')
    });
  }

  incrementCount(): void {
    this.counter++
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  toggleSelect(e: MouseEvent): void {
    this.selected = (e.target as HTMLElement).innerText.toLowerCase();
  }

  signin() {
    this.router.navigate(['signin']);
  }

}