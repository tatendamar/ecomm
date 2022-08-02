import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoriesService } from '../services/categories.service';
import { mergeMap, map, catchError, tap, concatMap, switchMap } from 'rxjs/operators';
import * as fromCategoriesActions from './categories.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class CategoriesEffects {

public readonly loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCategoriesActions.LoadCategories),
      switchMap(() =>
        this.categoriesService.categories().pipe(
          map(categories => 
            fromCategoriesActions.LoadCategoriesSuccess({ categories })),
          catchError(error =>
            of(fromCategoriesActions.LoadCategoriesFailure({ error })))
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
