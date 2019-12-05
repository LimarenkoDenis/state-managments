import { ExampleFeatureFacade } from './fasade/fasade.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'state-manag';
  products$: Observable<IProduct[]>;
  isLoading$: Observable<boolean>;

  public constructor(
    private exampleFeatureFacade: ExampleFeatureFacade
  ) {

  }

  ngOnInit() {
    this.exampleFeatureFacade.loadProducts();

    this.isLoading$ = this.exampleFeatureFacade.isLoading$;
    this.products$ = this.exampleFeatureFacade.products$;
  }
}
