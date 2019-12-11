import { ProductsAkitaService } from './../state-managments/akita/products.service';
import { ProductsQuery } from './../state-managments/akita/products.query';
import { NgxsLoadProducts } from './../state-managments/ngxs/products.actions';
import { IProduct } from './../interfaces/product.interface';
import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
import { loadProducts } from '../state-managments/ngrx/actions/product.actions';
import {Store, Select} from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductsState } from '../state-managments/ngxs/product.state';

@Injectable({
  providedIn: 'root'
})
export class ExampleFeatureFacade {
  // NGXS
  // isLoading$ = this.store.select('products', 'isLoading');
  // products$ = this.store.select('products', 'data');

  // constructor(private store: Store<any>) {}

  // loadProducts() {
  //   this.store.dispatch(loadProducts());
  // }



  // NGXS
  // constructor(private store: Store) {}

  // @Select(ProductsState.products)
  // public products$: Observable<IProduct[]>;

  // @Select(ProductsState.isLoading)
  // public isLoading$: Observable<boolean>;

  // loadProducts(): void {
  //   this.store.dispatch(new NgxsLoadProducts());
  // }


  // AKITA
  constructor(
    private productsAkitaService: ProductsAkitaService,
    private productsQuery: ProductsQuery
  ) {}

  public products$ = this.productsQuery.selectAll();
  public isLoading$ = this.productsQuery.selectLoading();

  loadProducts(): void {
    this.productsAkitaService.loadProducts();
  }
}
