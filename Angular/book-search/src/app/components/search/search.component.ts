import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  bookName: string = '';
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        switchMap((_) => {
          return this.bookService.getBooks(this.bookName);
        })
      )
      .subscribe();
  }
}
