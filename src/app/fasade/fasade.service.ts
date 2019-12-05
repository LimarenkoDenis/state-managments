import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../state-managments/ngrx/actions/product.actions';

@Injectable({
  providedIn: 'root'
})
export class ExampleFeatureFacade {
  isLoading$ = this.store.select('products', 'isLoading');
  products$ = this.store.select('products', 'data');

  constructor(private store: Store<any>) {}

  loadProducts() {
    this.store.dispatch(loadProducts());
  }
}
