import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  currentUser!: any;

  constructor(private user: UserService) {
  }

  ngOnInit(): void {
  }
}
