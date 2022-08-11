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

  public Movies?:any = {}
  SearchForm = new FormGroup({
    search: new FormControl(''),
    upcoming: new FormControl(''),
    nowplaying: new FormControl('')
  })
  @ViewChild('search', { static: true }) name: ElementRef = new ElementRef('');

  page:number=1
  constructor(public router:Router, private service:MoviesService){}

  ngOnInit(): void {
    this.service.getMovies(this.page).subscribe((result: any)=>{this.Movies=result; console.log(this.Movies)})
    this.SearchForm.controls.nowplaying.setValue('true')
  }
  ngAfterViewInit() {
    this.SearchTitle()
  }
selectNowPlaying(){
  if(this.SearchForm.controls.upcoming.enabled){this.SearchForm.controls.upcoming.reset()}
  this.SearchForm.controls.search.setValue('')
  this.service.getMovies(1).subscribe((result: any)=>{this.Movies=result; console.log(this.Movies)})
}

SearchTitle(){
  fromEvent(this.name.nativeElement, 'keyup')
  .pipe(
    debounceTime(500),
    distinctUntilChanged(),
    mergeMap(ev =>
    this.service.getByTitle(this.name.nativeElement.value).
    pipe(map(result=>{return result}))
    )).subscribe(result=>{
      this.Movies=result})
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
  this.service.getUpcoming(date).subscribe((result: any)=>{this.Movies=result; console.log(this.Movies)})
}
onScroll(): void {
  this.page++
  if(this.page==1000){this.page=1}
  this.service.getMovies(this.page).subscribe((result: any)=>{this.Movies=result})
}
}

