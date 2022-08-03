import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap, concatMap, switchMap } from 'rxjs/operators';
import * as fromProductsActions from './products.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';


@Injectable()
export class ProductsEffects {

public readonly loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductsActions.LoadProducts),
      switchMap((action) =>
        this.categoriesService.products(action.name,action.page,action.sort).pipe(
          map(products => 
            fromProductsActions.LoadProductsSuccess({ products })),
          catchError(error =>
            of(fromProductsActions.LoadProductsFailure({ error })))
        )
      )
    )
  );


  init$ = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );




  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

}
