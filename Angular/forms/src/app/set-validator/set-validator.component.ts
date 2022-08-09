import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-validator',
  templateUrl: './set-validator.component.html',
  styleUrls: ['./set-validator.component.scss'],
})
export class SetValidatorComponent implements OnInit {
  title = 'setValidators';

  myform!: FormGroup;

  notifyOptions = ['Email', 'SMS'];

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      email: ['', []],
      mobile: '',
      notifyVia: ['', Validators.required],
    });

    this.myform.get('notifyVia')?.valueChanges.subscribe((_: any) => {
      this.changeValidators();
    });
  }
  ngOnInit(): void {}

  changeValidators() {
    console.log(this.myform.get('notifyVia')?.value);

    if (this.myform.get('notifyVia')?.value == 'Email') {
      this.myform.controls['email'].setValidators([
        Validators.required,
        Validators.email,
      ]);
      this.myform.controls['mobile'].clearValidators();
    } else {
      this.myform.controls['email'].clearValidators();
      this.myform.controls['mobile'].setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
    }

    this.myform.get('email')?.updateValueAndValidity();
    this.myform.get('mobile')?.updateValueAndValidity();
  }
}
