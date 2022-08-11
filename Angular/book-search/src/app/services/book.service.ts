import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book, RootObject } from '../interfaces/book.interface';

@Injectable()
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private books: Book[] = [];
  private booksSubject$ = new Subject();
  books$ = this.booksSubject$.asObservable();

  private wishList: Book[] = [];
  private wishListSubject$ = new BehaviorSubject(this.wishList);
  wishList$ = this.wishListSubject$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getBooks(bookName: string) {
    if (bookName.trim() !== '')
      return this.http.get([this.baseUrl, bookName].join('')).pipe(
        <any>tap(({ items }: RootObject) => {
          this.books = items.map(({ volumeInfo }) => {
            return {
              bookName: volumeInfo.title,
              publisher: volumeInfo.publisher,
              publish: volumeInfo.publishedDate,
              description: volumeInfo.description,
              img: volumeInfo.imageLinks.thumbnail,
            };
          });
          this.booksSubject$.next(this.books);
        })
      );
    return of('err');
  }

  addToBookList(book: Book) {
    this.wishList.push(book);
    // this.wishListSubject$.next(this.wishList);
  }
}
