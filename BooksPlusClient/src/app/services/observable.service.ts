import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/books-plus-models';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private http: HttpClient) { }

  getBooks(url: string): Observable<Book[]>
  {
    return this.http.get<Book[]>(url);
  }
}
