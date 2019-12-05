import { environment } from './../../../../environments/environment';
import { IEntityState } from './../../../interfaces/entity.interface';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {productReducer} from '../reducers/product.reducer';
import { IProduct } from 'src/app/interfaces/product.interface';


export const stateFeatureKey = 'state';

export interface IRootState {
  products: IEntityState<IProduct>;
}

export const reducers: ActionReducerMap<IRootState> = {
  products: productReducer,
};


export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];
