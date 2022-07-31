import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHeaderHeight:number = 200;
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
