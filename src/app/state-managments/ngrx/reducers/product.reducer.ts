import { IProduct } from './../../../interfaces/product.interface';
import { IEntityState } from './../../../interfaces/entity.interface';
import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductSuccess, loadProductError } from '../actions/product.actions';

export const initialState: IEntityState<IProduct> = {
  isLoading: false,
  data: [],
  entities: {},
  errors: null
};

const ProductReducer = createReducer(initialState,
  on(loadProducts, (state: IEntityState<IProduct>) => {
    return { ...state, isLoading: true };
  }),
  on(loadProductSuccess, (state: IEntityState<IProduct>, { products }) => {
    return {
      ...state,
      data: products,
      isLoading: false
    };
  }),
  on(loadProductError, (state: IEntityState<IProduct>, { error }) => {
    return { ...state, isLoading: false, errors: error };
  }),
);

export function productReducer(state: IEntityState<IProduct>, action) {
  return ProductReducer(state, action);
}
