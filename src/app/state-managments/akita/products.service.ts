import { ProductsStore } from './products.store';
import { Injectable } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsAkitaService {
  constructor(
    private productsStore: ProductsStore,
    private productsService: ProductsService
  ) {}

  loadProducts() {
    this.productsStore.setLoading(true);

    this.productsService.getProducts({}).subscribe((products: IProduct[]) => {
      this.productsStore.set(products);
      this.productsStore.setLoading(false);
    });
  }
}
