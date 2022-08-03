import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, PRODUCTS_FEATURE_KEY } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);


export const getProductsLoaded = createSelector(
    getProductsState,
    (state: ProductsState) => state.loaded
  );


  export const getAllProducts  = createSelector(
    getProductsState,
    (state: ProductsState) => {
    console.log("🚀 ~ file: products.selectors.ts ~ line 16 ~ state", state.products.map(item => item))
      
        return state.products
    }
  );


  export const getProductsError = createSelector(
    getProductsState,
    (state: ProductsState) => state.error
  );
