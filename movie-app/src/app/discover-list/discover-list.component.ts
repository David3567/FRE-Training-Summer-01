import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Observable, tap, switchMap } from 'rxjs';
import { DiscoverService } from '../services/discover.service';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.css'],
})
export class DiscoverListComponent implements OnInit {
  @Input() apiKey: any;
  discover$!: Observable<any>;
  form!: FormGroup;
  count = 1;

  constructor(
    private readonly discoverService: DiscoverService,
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
          this.count = 1;
          return this.discoverService.getSearch(val, this.apiKey);
        })
      )
      .subscribe(console.log);
  }

  onScroll(val: string) {
    this.discoverService
      .addAdditionallyPage(val, this.count++ + 1, this.apiKey)
      .subscribe(console.log);
  }
}
