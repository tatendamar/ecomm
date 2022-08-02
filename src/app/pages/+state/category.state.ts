import { RootObject } from "../../shared/models/Categories";


export const CATEGORIES_FEATURE_KEY = 'categories';


export interface CategoriesState {
    categories: RootObject[];
    loaded: boolean;
    error?: string | null;
}

export const initialCategoryState: CategoriesState = {
    categories: [],
    error: null,
    loaded: false
};

// import { createEntityAdapter, EntityState } from "@ngrx/entity";
// import { RootObject } from "../../shared/models/Categories";


// export const CATEGORIES_FEATURE_KEY = 'categories';



// // export const categoryAdapter = createEntityAdapter<RootObject>({
// //     selectId: x => x.id
// //   });

// export interface CategoriesState extends EntityState<RootObject> {
//     category: RootObject[];
//     loaded: boolean;
//     error?: string | null;
// }

// export const initialCategoryState: CategoriesState = categoryAdapter.getInitialState({
//     category: [],
//     error: null,
//     loaded: false
// });