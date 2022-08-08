import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  currentUsers:User[] = [];

  constructor(
    private route: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      console.log(users + "users")
      console.log(users)
      this.currentUsers = users;
     })
  }

  onSignUp(email: string, password: string, repeatPassword: string, e: any): void {
    e.preventDefault();
    this.getUsers();

    for (let i = 0; i < this.currentUsers.length; i++){
      if (this.currentUsers[i].email === email) {
        throw new Error(`User with email ${this.currentUsers[i].email} already exists`);
      }
    }

    if (password &&
      repeatPassword.toLowerCase() === password.toLowerCase()) {
      this.userService.register({ email, password })
        .subscribe(newUser => {
          console.log("Current registered user: " + newUser)
          //Navigate to sign in page
          this.route.navigate(['/sign-in']);
        })
    }
  }
}
