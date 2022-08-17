import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Movies?:any = {}
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.service.getMovies(1).subscribe((result: any)=>{this.Movies=result; console.log(this.Movies)})
  }

}
