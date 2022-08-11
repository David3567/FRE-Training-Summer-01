import { query } from '@angular/animations';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {MoviesService} from '../services/movies.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public router:Router, private service:MoviesService){
  }
}
