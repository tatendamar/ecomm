import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { initialProductState, ProductsState } from './products.state';


const productsReducer = createReducer(
  initialProductState,
  on(ProductsActions.LoadProducts,(state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(ProductsActions.LoadProductsSuccess,(state, {products}) => ({
    ...state,
    products: products,
    loaded: true,
    error: null,
  })),


  on(ProductsActions.LoadProductsFailure, (state, { error }) => ({ ...state, error })),

)



export const selectFeature = (state: ProductsState) => state.products


export function reducer(state: ProductsState | undefined, action: Action): ProductsState {
    return productsReducer(state, action);
  }
