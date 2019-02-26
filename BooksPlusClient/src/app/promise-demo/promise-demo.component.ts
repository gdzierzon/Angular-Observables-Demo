import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Book } from '../models/books-plus-models';
import {PromisesService} from '../services/promises.service';

@Component({
  selector: 'promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.less']
})
export class PromiseDemoComponent implements OnInit {

  books: Book[] = [];

  settings: AppSettings;
  constructor(private service: PromisesService) {
    this.settings = new AppSettings();
  }

  ngOnInit() {
  }

  onClick()
  {
    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}`;

    this.service.getBooks(url)
      .then(books =>
      {
        this.books = books;
      })
      .catch(error => console.log(error));
  }

}
