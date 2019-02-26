import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app-settings';
import { Book } from '../models/books-plus-models';
import {AjaxService} from '../services/ajax.service';

@Component({
  selector: 'ajax-demo',
  templateUrl: './ajax-demo.component.html',
  styleUrls: ['./ajax-demo.component.less']
})
export class AjaxDemoComponent implements OnInit {

  books: Book[] = [];

  settings: AppSettings;
  constructor(private ajaxService: AjaxService) {
    this.settings = new AppSettings();
  }

  ngOnInit() {
  }

  onClick() {

    const url = `${this.settings.booksApi.baseUrl}${this.settings.booksApi.books}`;

    this.ajaxService.getBooks(url, (err, books: Book[]) => {
      if (err) { throw err; }
      this.books = books;
    });
  }
}
