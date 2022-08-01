import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  counter : number = 0;
  email : string = '';
  password : string = '';
  selected : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.counter++
    console.log(this.counter)
  }

  setEmail(event : any) {
    this.email = event.target.value;
  }

  setPassword(event : any) {
    this.password = event.target.value;
  }

  toggleSelect(e: any) {
    this.selected = e.target.innerText.toLowerCase();
  }

}
