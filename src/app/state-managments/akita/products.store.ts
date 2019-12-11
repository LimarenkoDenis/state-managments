import { IProduct } from 'src/app/interfaces/product.interface';
import { IEntityState } from './../../interfaces/entity.interface';
import { EntityStore, StoreConfig, getInitialEntitiesState } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ProductsState extends IEntityState<IProduct> {
}

const initialState = getInitialEntitiesState();

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super(initialState);
  }
}
