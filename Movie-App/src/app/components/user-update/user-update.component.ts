import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  roles: any = ['USER', 'ADMIN'];
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // console.log(this.auth.userSubject());
    // this.updateRole(this.userInfo);
  }

  form = new FormGroup({
    role: new FormControl('', Validators.required),
  });

  onSubmit() {
    let userInfo = {
      email: this.auth.userSubject().email,
      role: this.form.value.role,
    };
    return this.auth.updateUserRole(userInfo).subscribe((res) => {
      console.log(res);
    });
  }
}
