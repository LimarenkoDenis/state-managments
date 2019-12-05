import { IProduct } from './../../../interfaces/product.interface';
import { loadProducts, loadProductSuccess, loadProductError } from './../actions/product.actions';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/product.service';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productsService.getProducts({}).pipe(
          map((products: IProduct[]) => loadProductSuccess({ products })),
          catchError(error => of(loadProductError({ error }))
        )
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
