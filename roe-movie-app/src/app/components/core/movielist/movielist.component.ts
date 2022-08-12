import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,  OnDestroy} from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Router } from '@angular/router';
import { fromEvent, debounceTime, distinctUntilChanged, map, switchMap, mergeMap, filter, isEmpty } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  public Movies?:any = []
  SearchForm = new FormGroup({
    search: new FormControl(''),
    upcoming: new FormControl(''),
    nowplaying: new FormControl('')
  })
  @ViewChild('search', { static: true }) name: ElementRef = new ElementRef('');

  page:number=1
  searchPage:number=1
  upcomingPage:number=1

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Start MOVI INFO variables */
  videos:any= []
  casts:any =[]
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ End MOVI INFO variables */
  constructor(public router:Router, private service:MoviesService){}

  ngOnInit(): void {
    this.service.getMovies(this.page).subscribe((result: any)=>{this.Movies=result.results; console.log(this.Movies)})
    this.SearchForm.controls.nowplaying.setValue('true')
  }
  ngAfterViewInit() {
    this.SearchTitle()
  }
selectNowPlaying(){
  if(this.SearchForm.controls.upcoming.enabled){this.SearchForm.controls.upcoming.reset()}
  this.SearchForm.controls.search.setValue('')
  this.service.getMovies(1).subscribe((result: any)=>{this.Movies=result.results; console.log(this.Movies)})
}

SearchTitle(){
  fromEvent(this.name.nativeElement, 'keyup')
  .pipe(
    debounceTime(500),
    distinctUntilChanged(),
    mergeMap(ev =>
    this.service.getByTitle(this.name.nativeElement.value,this.searchPage).
    pipe(map(result=>{return result}))
    )).subscribe(result=>{
      console.log(result)
      this.Movies=result.results})
}

changeOtherControls(){
  if(this.SearchForm.controls.nowplaying.enabled){this.SearchForm.controls.nowplaying.reset()}
  if(this.SearchForm.controls.upcoming.enabled){this.SearchForm.controls.upcoming.reset()}
}

selectUpcoming(){
 let date=new Date().toISOString().split('T')[0]
  console.log(date)
  if(this.SearchForm.controls.nowplaying.enabled){this.SearchForm.controls.nowplaying.reset()}
  this.SearchForm.controls.search.setValue('')
  this.service.getUpcoming(date,this.upcomingPage).subscribe((result: any)=>{this.Movies=result.results;})
}
onScroll(): void {
  this.page++
  if(this.page==350){this.page=1}
  if(this.SearchForm.controls.nowplaying.enabled){
  this.service.getMovies(this.page).subscribe((result:any)=>{for(let i of result.results){this.Movies.push(i)}})
  }
}

getInfo(id:number){
  this.service.getMovieInfo(id).subscribe((result:any)=>{this.videos=result.videos; this.casts=result.credits.cast; console.log(this.casts,this.videos)})
}
}

