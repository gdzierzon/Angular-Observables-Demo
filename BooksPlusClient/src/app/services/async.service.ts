import { Injectable } from '@angular/core';
import {Book} from '../models/books-plus-models';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  async getBooks(url: string): Promise<Book[]> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });

  }
}
