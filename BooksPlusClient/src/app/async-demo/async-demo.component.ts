import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Book } from '../models/books-plus-models';
import {AsyncService} from '../services/async.service';

@Component({
  selector: 'async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.less']
})
export class AsyncDemoComponent implements OnInit {
  page = 0;
  books: Book[] = [];

  settings: AppSettings;
  constructor(private service: AsyncService) {
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


  async getBooks()
  {
    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}/${this.page}`;

    try {
      this.books = await this.service.getBooks(url);
    }
    catch(error)
    {
      console.log(error);
    }
  }

}
