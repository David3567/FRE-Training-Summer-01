import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.scss']
})
export class WelcomeHeaderComponent implements OnInit {
  showHeaderHeight:number = 80;
  constructor() { }
  @Input() showHeader: boolean = false;
  ngOnInit(): void {
  }
  logoClick(){
    document.documentElement.scrollTop = 0;
  }
  @HostListener("document:scroll")
  onScroll(){
    if(document.documentElement.scrollTop >= this.showHeaderHeight && !this.showHeader){
      this.showHeader = true;
      console.log("Show header");
      return;
    }
    if(document.documentElement.scrollTop < this.showHeaderHeight && this.showHeader){
      this.showHeader = false;
      console.log("hide header");
      return;
    }
  }
}
