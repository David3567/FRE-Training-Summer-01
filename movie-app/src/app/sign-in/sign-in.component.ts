import { Component } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  show = false;
  showErrorMess = false;

  showPassword(): void {
    this.show = !this.show;
  }

  onLogin() {
    this.showErrorMess = !this.showErrorMess;
    setTimeout(() => {
      this.showErrorMess = false;
    }, 3000)
  }
}
