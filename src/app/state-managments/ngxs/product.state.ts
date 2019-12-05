import { NgxsLoadProducts } from './products.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { IEntityState } from 'src/app/interfaces/entity.interface';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/product.service';

@State<IEntityState<IProduct>>({
  name: 'products',
  defaults: {
    isLoading: false,
    data: [],
    entities: {},
    errors: null
  }
})
export class ProductsState {

  @Selector()
  static products(state: IEntityState<IProduct>): IProduct[] {
    return state.data;
  }

  @Selector()
  static isLoading(state: IEntityState<IProduct>): boolean {
    return state.isLoading;
  }

  @Selector()
  static errors(state: IEntityState<IProduct>): any {
    return state.errors;
  }

  @Action(NgxsLoadProducts)
  loadProducts({ patchState }: StateContext<IEntityState<IProduct>>, { }: NgxsLoadProducts) {

    patchState({ isLoading: true });

    return this.productsService.getProducts({ }).pipe(
      tap((products: IProduct[]) => {
        patchState({ data: products, isLoading: false });
      })
    );
  }

  constructor(
    private productsService: ProductsService,
  ) {}
}
