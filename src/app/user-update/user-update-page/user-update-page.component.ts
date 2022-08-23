import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BASEURL } from 'src/app/app.module';
import { AuthService } from 'src/app/auth/auth.service';
import { UserInfo } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-user-update-page',
  templateUrl: './user-update-page.component.html',
  styleUrls: ['./user-update-page.component.css'],
})
export class UserUpdatePageComponent implements OnInit {
  selectedOption?: string;
  currentRole?: string;
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.userInfo.subscribe((info) => {
      this.currentRole = info.role;
    });
  }

  submit() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const reqBody = {
        username: JSON.parse(userData).username,
        email: JSON.parse(userData).email,
        role: this.selectedOption,
      };
      console.log(reqBody);

      this.http.patch(BASEURL + '/auth/userupdate', reqBody).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('User info not in local storage');
    }
  }

  updateSelection(option: string) {
    this.selectedOption = option;
  }
}
