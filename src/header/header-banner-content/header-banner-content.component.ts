import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-banner-content',
  templateUrl: './header-banner-content.component.html',
  styleUrls: ['./header-banner-content.component.css']
})
export class HeaderBannerContentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['register'])
  }
}
