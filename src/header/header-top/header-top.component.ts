import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signin(){
    this.router.navigate(['signin']);
  }

  returnhome(){
    this.router.navigate(['home']);
  }

}
