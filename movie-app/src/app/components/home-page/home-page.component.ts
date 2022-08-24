import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('emailRegis') emailRegis?: ElementRef;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.userService.navigateToMovies()
  }

  onClickGTR(recall: any) {
    console.log('regis');
    console.log(recall);
  }
  onClickSI(recall: any) {
    console.log('login');
    console.log(recall);
  }
}
