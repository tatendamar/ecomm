import * as productsSelectors from './products.selectors';
import * as productsActions from './products.actions';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ProductsState } from './products.state';
import { Content, ProductRootObject } from '../../../shared/models/products';


@Injectable()
export class ProductsFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(productsSelectors.getProductsLoaded)
  );
  public readonly allProducts$: Observable< ProductRootObject[]> = this.store.pipe(
    select(productsSelectors.getAllProducts)
  );

  constructor(private readonly store: Store<ProductsState>) {}


  public init(): void {
    this.store.dispatch(productsActions.Init());
  }

  
  public loadProducts(model: {name,page, sort}) {
    this.store.dispatch(productsActions.LoadProducts(model));
  }


}