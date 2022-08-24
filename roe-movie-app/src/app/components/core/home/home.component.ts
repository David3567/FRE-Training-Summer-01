import { Component, OnInit, Self } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { info } from 'src/app/interfaces/info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Movies?: any = {};
  public info: info[] = [];
  constructor(private service: MoviesService, private JwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.info = this.service.homeInfo
    this.service.getMovies(1).subscribe((result: any) => {
      this.Movies = result;
    });
  }
}
