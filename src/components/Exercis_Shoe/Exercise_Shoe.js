import React from 'react'
import { useSelector } from 'react-redux';
import Cart_Shoe from './Cart_Shoe';
import ListShoe from './ListShoe';

export default function Exercise_Shoe() { 

  const cartShoe = useSelector(state => state.ShoeReducer.cartShoe)
  return (
    <div className='bg-dark text-white' style={{width:"100%", height: '100%'}}>
        <div className="container">
            <h1 className='text-center p-4'>Exercise Shoe</h1>
            {cartShoe.length >= 1 && <Cart_Shoe />}
            <ListShoe /> 
        </div>
    </div>
  )
}

