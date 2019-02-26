import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Observable, Observer} from 'rxjs';
import {Book} from '../models/books-plus-models';


@Component({
  selector: 'header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCartComponent implements OnInit {
  cart: Observable<Book[]>;

  constructor(private cartService: ShoppingCartService, private ref: ChangeDetectorRef){

    this.ref.markForCheck();
    this.cart = this.cartService.cart;
  }

  ngOnInit(): void {
  }

}
