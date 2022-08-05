import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly bookService: BookService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputbox: [''],
    });

    this.form
      .get('inputbox')
      ?.valueChanges.pipe(
        debounceTime(500),
        switchMap((val) => {
          return this.bookService.getBooks(val);
        })
      )
      .subscribe();
  }
}
