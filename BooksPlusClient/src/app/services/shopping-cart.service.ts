import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Book} from '../models/books-plus-models';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartSubject: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  public cart: Observable<Book[]> = this.cartSubject.asObservable();

  public add(book: Book)
  {
    const cart = this.cloneCart();
    cart.push(_.cloneDeep(book));
    this.cartSubject.next(cart);
  }

  private cloneCart(){
    return _.cloneDeep(this.cartSubject.getValue());
  }
}
