import { Component, OnInit, Self } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public Movies?: any = {};
  constructor(private service: MoviesService,private JwtHelper:JwtHelperService) {}

  ngOnInit(): void {
    this.service.getMovies(1).subscribe((result: any) => {
      this.Movies = result;
    });
  }
}
