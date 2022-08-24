import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
})
export class UpgradeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user: string = 'USER';
  admin: string = 'ADMIN';
  super: string = 'SUPERUSER';
  ngOnInit(): void {}

  onClick(roles: string) {
    console.log(roles);
    this.authService.upgradeRole(roles).subscribe();
  }
}
