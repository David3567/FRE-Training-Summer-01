import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form!: FormGroup;

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
    @Inject('CheckEmailApi') private checkEmailUrl: string
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required, [this.asyncValidatorCheckEmail()]],
    });
  }
  onSubmit() {}

  //* helper fn~~~~~~~~~~~~~~~
  private checkEmail(val: any) {
    return this.http.post(this.checkEmailUrl, val);
  }

  private asyncValidatorCheckEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkEmail({ email: control.value }).pipe(
        <any>map((res: boolean) => {
          console.log(res);
          return res ? null : { hasemail: true };
        })
      );
    };
  }
}

interface AsyncValidatorFn {
  (control: AbstractControl): Observable<ValidationErrors | null>;
}
