import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books$!: Observable<any>;

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.books$;
  }

  addToWishList(book: Book) {
    this.bookService.addToBookList(book);
  }
}
