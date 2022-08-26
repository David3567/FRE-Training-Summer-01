import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { debounceTime, map, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

export class EmailValidator {
    static createValidator(authService: AuthService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return authService
                .checkEmail(control.value)
                .pipe(
                    <any>map((result: boolean) => {
                        console.log("result:", result);
                        !result ? { invalidEmail: true } : null;
                    }
                    )
                );
        };
    }
}

