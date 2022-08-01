import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles.css','./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() registerEvent = new EventEmitter();
  @Input() serverErrorMsg: string | null = null;

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      confirmPassword: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  hasUserEvent(key: string) {
    return (
      this.registerForm.controls[key].touched ||
      this.registerForm.controls[key].touched
    );
  }

  hasError(key: string, validation: string) {
    return this.registerForm.controls[key].hasError(validation);
  }

  onSubmit() {
    this.registerEvent.emit(this.registerForm.value);
  }
}
