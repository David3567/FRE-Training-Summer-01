import { Component, ComponentRef, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  public textcenter:object={
    textAlign:'center'
  }

  public VotingAveragecolor1:object ={
    color:"green",
    fontSize:18
  }

  public VotingAveragecolor2:object ={
    color:"orange",
    fontSize:16
  }

  public VotingAveragecolor3:object ={
    color:"red",
    fontSize:14
  }

  public VotingAverageHeader1:object ={
    color:"green",
    fontSize:32
  }

  public VotingAverageHeader2:object ={
    color:"orange",
    fontSize:28
  }

  public VotingAverageHeader3:object ={
    color:"red",
    fontSize:24
  }

  public class1:string="class1"
  public class2:string="class2"
  public Movies?:any = {}
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.service.getMovies(1).subscribe((result: any)=>{this.Movies=result; console.log(this.Movies)})
  }

}
