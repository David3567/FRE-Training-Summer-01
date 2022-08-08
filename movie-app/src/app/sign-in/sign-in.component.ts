import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isHidden = true;
  showErrorMess = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  showPassword(): void {
    this.isHidden = !this.isHidden;
  }

  onLogin(email: string, password: string, e: any): void {
    e.preventDefault();
    // this.showErrorMess = !this.showErrorMess;
    // setTimeout(() => {
    //   this.showErrorMess = false;
    // }, 3000)
    this.userService.signIn(email, password)
      .subscribe((user: any) => {
        console.dir(user);
        this.router.navigate(['/movies-list']);
      })
  }
}
