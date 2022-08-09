import {AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl} from '@angular/forms';

export function pswduppercase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;
        
        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const passwordValid = hasUpperCase;
        return !passwordValid ? { pswduppercase: true } : null;

    }
}

export function pswdnumeric(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        
        if (!value) {
            return null;
        }

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasNumeric;

        return !passwordValid ? {pswdnumeric:true}: null;
    }
}

export function pswdlowercase(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        
        if (!value) {
            return null;
        }

        const hasLowerCase = /[a-z]+/.test(value);

        const passwordValid = hasLowerCase;

        return !passwordValid ? {pswdlowercase:true}: null;
    }
}

export function passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const pwd = control.root.get('password')?.value;
        const confirmpwd = control.value;

        if (!confirmpwd) {
            return null;
        }

        return confirmpwd === pwd ? null : {passwordMatch: true}
    }
}