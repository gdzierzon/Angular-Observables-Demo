import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Book } from '../models/books-plus-models';
import {ObservableService} from '../services/observable.service';

@Component({
  selector: 'observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.less']
})
export class ObservableDemoComponent implements OnInit {

  books: Book[] = [];

  settings: AppSettings;

  constructor(private service: ObservableService) {
    this.settings = new AppSettings();
  }

  ngOnInit() {
  }

  onClick()
  {
    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}`;

    this.service.getBooks(url)
      .subscribe(
        (response) =>
        {
          this.books = response;
        },
        (error) => console.log(error)
      );
  }

}
