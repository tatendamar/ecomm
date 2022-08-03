import { Content, ProductRootObject } from '../../../shared/models/products';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState {
    products:  ProductRootObject[];
    loaded: boolean;
    error?: string | null;
}

export const initialProductState: ProductsState = {
    products: [],
    error: null,
    loaded: false
};

