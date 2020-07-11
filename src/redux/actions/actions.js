import { LOAD_PRODUCT, 
    LOAD_CATEGORIES, 
    SEARCH_PRODUCT, 
    ADD_PRODUCT, 
    DELETE_ORDER_PRODUCT,
    ADD_ORDER_PRODUCT,
    SUBTRACT_ORDER_PRODUCT
    } from '../types/types'


export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCT,
        payload: data,
    }
}

export const loadCategories = (data) => {
    return {
        type: LOAD_CATEGORIES,
        payload: data,
    }
}

export const searchProduct = (data) => {
    return {
        type: SEARCH_PRODUCT,
        payload: data,
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data,
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_ORDER_PRODUCT,
        payload: id,
    }
}

export const subtractOrderProduct = (id) => {
    return {
        type: SUBTRACT_ORDER_PRODUCT,
        payload: id,
    }
}

export const addOrderProduct = (id) => {
    return {
        type: ADD_ORDER_PRODUCT,
        payload: id,
    }
}