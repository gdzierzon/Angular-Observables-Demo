import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Book } from '../models/books-plus-models';
import { ObservableService } from '../services/observable.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { HeaderCartComponent} from '../header-cart/header-cart.component'

@Component({
  selector: 'observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.less']
})
export class ObservableDemoComponent implements OnInit {
  page = 0;
  books: Book[] = [];

  settings: AppSettings;

  constructor(private service: ObservableService, private cartService: ShoppingCartService) {
    this.settings = new AppSettings();
  }

  ngOnInit() {
  }

  onPrev()
  {
    if (this.page > 0)
    {
      this.page = this.page - 1;
      this.getBooks();
    }
  }

  onNext() {

    this.page = this.page + 1;
    this.getBooks();
  }


  getBooks()
  {
    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}/${this.page}`;

    this.service.getBooks(url)
      .subscribe(
        (response) =>
        {
          this.books = response;
        },
        (error) => console.log(error)
      );
  }

  addToCart(book: Book)
  {
    this.cartService.add(book);
  }

}
