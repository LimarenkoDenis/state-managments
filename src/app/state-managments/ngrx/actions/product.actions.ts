import { IProduct } from './../../../interfaces/product.interface';

import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('Load Products');
export const loadProductSuccess = createAction('Load Products Success', props<{ products: IProduct[] }>());
export const loadProductError = createAction('Load Products Error', props<{ error: any }>());
