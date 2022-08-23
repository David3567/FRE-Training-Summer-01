import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
})
export class UpgradeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onClick() {
    // this.authService.upgradeRole('ADMIN');
  }
}
