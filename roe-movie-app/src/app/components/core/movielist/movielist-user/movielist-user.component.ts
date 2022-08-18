import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  templateUrl: './movielist-user.component.html',
  styleUrls: ['./movielist-user.component.css']
})
export class MovielistUserComponent implements OnInit , DoCheck{
  userInfo:object|any
  constructor(private route: ActivatedRoute) {
    this.userInfo=this.route.snapshot.data[0].userinfo;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    
  }

}
