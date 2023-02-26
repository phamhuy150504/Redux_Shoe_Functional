import { ADD_TO_CART, INCREASE_REDUCER, REMOVE_SHOE } from "../Type/TypeShoe"


export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeShoe = payload => {
    return {
        type: REMOVE_SHOE,
        payload
    }
}

export const increaseReducer = (id, result) => {
    return {
        type: INCREASE_REDUCER,
        id,
        result
    }
}
