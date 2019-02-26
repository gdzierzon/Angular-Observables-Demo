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

  books: Book[] = [];

  settings: AppSettings;
  constructor(private service: AsyncService) {
    this.settings = new AppSettings();
  }

  ngOnInit() {
  }

  async onClick()
  {
    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}`;

    try {
      this.books = await this.service.getBooks(url);
    }
    catch(error)
    {
      console.log(error);
    }
  }

}
