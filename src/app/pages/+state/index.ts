import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProducts from './categories.reducer';

export const storiesStateFeatureKey = 'storiesState';

// export interface State {
//   category: fromProducts.CategoriesState

// }

// export const reducers: ActionReducerMap<State> = {
//   category: fromProducts.categoriesReducer
// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
