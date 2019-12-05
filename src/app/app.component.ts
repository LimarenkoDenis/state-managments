import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from './state-managments/ngrx/actions/product.actions';
import { IProduct } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'state-manag';
  products$: Observable<IProduct[]>;
  isLoading$: Observable<boolean>;

  public constructor(
    private store: Store<any>
  ) {

  }

  ngOnInit() {
    this.isLoading$ = this.store.select('products', 'isLoading');
    this.products$ = this.store.select('products', 'data');

    this.store.dispatch(loadProducts());
  }
}
