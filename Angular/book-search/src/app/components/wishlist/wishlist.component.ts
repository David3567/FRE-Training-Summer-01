import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishList$!: Observable<any>;

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.wishList$ = this.bookService.wishList$;
  }
}
