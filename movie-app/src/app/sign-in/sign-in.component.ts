import { Component } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isHidden = true;
  showErrorMess = false;

  showPassword(): void {
    this.isHidden = !this.isHidden;
  }

  onLogin() {
    this.showErrorMess = !this.showErrorMess;
    setTimeout(() => {
      this.showErrorMess = false;
    }, 3000)
  }
}
