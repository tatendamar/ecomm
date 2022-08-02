import { Action, createReducer, on } from '@ngrx/store';
import * as CategoriesActions from './categories.actions';
import { CategoriesState, initialCategoryState } from './category.state';


const categoriesReducer = createReducer(
    initialCategoryState,
  on(CategoriesActions.Init, (state) => ({ ...state, loaded: false, error: null })),
  on(CategoriesActions.LoadCategories,(state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(CategoriesActions.LoadCategoriesSuccess,(state, {category}) => ({
    ...state,
    categories: category,
    loaded: true,
    error: null,
  })),



  on(CategoriesActions.LoadCategoriesFailure, (state, { error }) => ({ ...state, error }))
)


export function reducer(state: CategoriesState | undefined, action: Action) {
    return categoriesReducer(state, action);
  }