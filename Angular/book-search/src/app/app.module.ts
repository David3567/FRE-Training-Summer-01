import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    WishlistComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
