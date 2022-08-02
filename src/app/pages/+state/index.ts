import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProducts from './categories.reducer';
import { CategoriesState } from './category.state';



// export const reducers: ActionReducerMap<CategoriesState> = {
//   categories: fromProducts.reducer
// };


export const metaReducers: MetaReducer<CategoriesState>[] =  [];
