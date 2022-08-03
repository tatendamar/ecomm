import { ProductRootObject } from "src/app/shared/models/products";
import { RootObject } from "../../shared/models/categories";


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


