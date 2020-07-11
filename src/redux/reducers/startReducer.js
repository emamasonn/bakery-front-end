import { LOAD_PRODUCT, LOAD_CATEGORIES, SEARCH_PRODUCT } from '../types/types' 

const initialState = {
    categories: [],
    products: [],
}

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_PRODUCT:
            let products = action.payload
            return {...state, products: [...products]}
        case LOAD_CATEGORIES: 
            let categories = action.payload
            return {...state, categories: [...state.categories, ...categories]}
        case SEARCH_PRODUCT: 
            let product = action.payload
            return {...state, products: [...product]}
        default:
            return state;
    }
}