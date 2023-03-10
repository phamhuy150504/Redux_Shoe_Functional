import dataShoe from '../../data/dataShoe.json'
import { ADD_TO_CART, INCREASE_REDUCER, REMOVE_SHOE } from '../Type/TypeShoe'

const stateShoe = {
    dataShoe: dataShoe,
    cartShoe: []
}

const ShoeReducer = (state=stateShoe, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let cloneCart = [...state.cartShoe]
            let index = cloneCart.findIndex(shoe => shoe.id === action.payload.id)

            index !== -1 ?  cloneCart[index].amount++ :  cloneCart.push({...action.payload, amount: 1})

             return {...state, cartShoe: cloneCart}
        }
        case REMOVE_SHOE: {
            let cloneCart = [...state.cartShoe]
            let newCart = cloneCart.filter(shoe => shoe.id !== action.payload)

            return {...state, cartShoe: newCart}
        }
        case INCREASE_REDUCER : {
            let cloneCart = [...state.cartShoe]
            let index = cloneCart.findIndex(shoe => shoe.id === action.id)
          
            index !== -1 && action.result  
            ? cloneCart[index].amount++ : cloneCart[index].amount === 1 
            ? cloneCart[index].amount = 1 : cloneCart[index].amount--
            
            return {...state, cartShoe: cloneCart}
        }
        default : {
             return {...state}
        }
    }
}

export default ShoeReducer