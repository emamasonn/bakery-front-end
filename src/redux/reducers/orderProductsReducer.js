import { ADD_PRODUCT, DELETE_ORDER_PRODUCT, SUBTRACT_ORDER_PRODUCT, ADD_ORDER_PRODUCT } from '../types/types' 

const initialState = {
    shoppingCart: []
}

export default function (state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT:
            let updateProduct = []
            let product = action.payload
            let shopingCart = [...state.shoppingCart]

            let isShoppingCart = shopingCart.some((elCart) => elCart._id === product._id)

            if(isShoppingCart){
                updateProduct = shopingCart.map((productCart) => {
                    if(product._id === productCart._id){
                        productCart.quality += 1
                    }
                    return productCart
                })
                return {...state, shoppingCart: [...updateProduct]}
            }
            return {...state, shoppingCart: [...state.shoppingCart, product]}
        case DELETE_ORDER_PRODUCT:
            let id = action.payload 
            return {...state, shoppingCart: state.shoppingCart.filter( (product) => product._id !== id)}
        case ADD_ORDER_PRODUCT:
            let idAdd = action.payload
            let shoppingAdd = [...state.shoppingCart]
            let addProduct = shoppingAdd.map( (product) => {
                if(product._id === idAdd){
                    return {...product, quality: product.quality + 1}
                }
                return product
            })
            return {...state, shoppingCart: [ ...addProduct]}
        case SUBTRACT_ORDER_PRODUCT:
            let idSubtract = action.payload
            let shoppingSubtract = [...state.shoppingCart]
            let subtractProduct = shoppingSubtract.map( (product) => {
                if(product._id === idSubtract && product.quality > 1 ){
                    return {...product, quality: product.quality - 1}
                }
                return product
            })
            return {...state, shoppingCart: [ ...subtractProduct]}
        default:
            return state;
    }
}