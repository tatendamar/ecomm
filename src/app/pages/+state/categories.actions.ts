import { createAction, props } from '@ngrx/store';
import { RootObject, Image } from '../../shared/models/Categories';
import { Update } from '@ngrx/entity';


export enum CategoriesActionsNames {
    Init = '[Categories] Init',
    LoadCategories = '[Categories] Load Categories',
    LoadCategoriesSuccess = '[Categories] Load Categories Success',
    loadCategoriesFailure = '[Categories] Load Categories Failure',
  }

export const Init = createAction(CategoriesActionsNames.Init);

export const LoadCategories = createAction(
    CategoriesActionsNames.LoadCategories
);

export const LoadCategoriesSuccess = createAction(
  CategoriesActionsNames.LoadCategoriesSuccess,
  props<{ categories: RootObject[] }>()
);


export const LoadCategoriesFailure = createAction(
  CategoriesActionsNames.loadCategoriesFailure,
  props<{ error: any }>()
);


/** 
 * * PRODUCTS
*/

