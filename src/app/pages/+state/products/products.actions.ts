import { createAction, props } from "@ngrx/store";
import { Content, ProductRootObject } from '../../../shared/models/products';

export enum ProductsActionsNames {
    Init = '[Products] Init',
    LoadProducts = '[Products] Load Products',
    LoadProductsSuccess = '[Products] Load Products Success',
    LoadProductsFailure = '[Products] Load Products Failure',
  }

export const Init = createAction(ProductsActionsNames.Init);

export const LoadProducts = createAction(
    ProductsActionsNames.LoadProducts,
    props<{ name: string, page: number, sort: string }>()
  );
  
  export const LoadProductsSuccess = createAction(
    ProductsActionsNames.LoadProductsSuccess,
  props<{ products:  ProductRootObject[] }>()
  );
  
  
  export const LoadProductsFailure = createAction(
    ProductsActionsNames.LoadProductsFailure,
  props<{ error: any }>()
  );
  