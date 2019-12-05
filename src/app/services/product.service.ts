import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
  public products: IProduct[] = [
    {id: 1, title: 'Pepsi Cola'},
    {id: 2, title: 'Burger'},
    {id: 3, title: 'Coffee'},
    {id: 4, title: 'Salat'},
    {id: 5, title: 'Big mac'},
  ];

  public constructor(
    private http: HttpClient,
  ) {}

  public getProducts(params: Partial<any>): Observable<IProduct[]> {
    // const httpParams: HttpParams = new HttpParams({
    //   fromObject: {
    //     _page: String(params.pageIndex),
    //     _limit: String(params.pageSize)
    //   }
    // });

    // return this.http.get<IProduct[]>(`${environment.api}/products`, {
    //   params: httpParams
    // }).pipe(
    //   catchError((err) =>  of(err))
    // );


    // API request
    return of(this.products).pipe(
      tap(() => console.log('product request')),
      delay(3000)
    );
  }

}

