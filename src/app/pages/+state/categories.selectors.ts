import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState, CATEGORIES_FEATURE_KEY} from './category.state';




export const getCategoryState = createFeatureSelector<CategoriesState>(CATEGORIES_FEATURE_KEY);


// export const {
//   selectIds,
//   selectEntities,
//   selectAll: getAllCategory,
//   selectTotal
// } = categoryAdapter.getSelectors(getCategoryState);



export const getCategoriesLoaded = createSelector(
    getCategoryState,
    (state: CategoriesState) => state.loaded
  );

  // export const storyQuery = {
  //   getAllCategory
  // }

  export const getAllCategories  = createSelector(
    getCategoryState,
    (state: CategoriesState) => {
        console.log(state.categories)
        return state.categories
    }
  );


  export const getCategoriesError = createSelector(
    getCategoryState,
    (state: CategoriesState) => state.error
  );
