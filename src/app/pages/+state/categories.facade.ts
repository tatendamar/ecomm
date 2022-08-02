
import * as categorySelectors from './categories.selectors';
import * as categoryActions from './categories.actions';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RootObject } from 'src/app/shared/models/Categories';
import { CategoriesState } from './category.state';


@Injectable()
export class CategoryFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(categorySelectors.getCategoriesLoaded)
  );
  public readonly allCategories$: Observable<RootObject[]> = this.store.pipe(
    select(categorySelectors.getAllCategories)
  );

  constructor(private readonly store: Store<CategoriesState>) {}


  public init(): void {
    this.store.dispatch(categoryActions.Init());
  }

  
  public loadCategories() {
    this.store.dispatch(categoryActions.LoadCategories());
  }
}