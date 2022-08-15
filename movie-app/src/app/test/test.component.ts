import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { DiscoverService } from '../services/discover.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  discover$!: Observable<any>;
  form!: FormGroup;

  constructor(
    private discoverService: DiscoverService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.discover$ = this.discoverService.discoverSearch$;

    this.form = this.fb.group({
      inputbox: [''],
    });
    this.form
      .get('inputbox')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((val) => {
          return this.discoverService.getSearch(val);
        })
      )
      .subscribe(console.log);
  }
}
