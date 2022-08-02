import { RootObject } from "../../shared/models/Categories";


export const CATEGORIES_FEATURE_KEY = 'categories';


export interface CategoriesState {
    category: RootObject[];
    loaded: boolean;
    error?: string | null;
}

export const initialCategoryState: CategoriesState = {
    category: [],
    error: null,
    loaded: false
};