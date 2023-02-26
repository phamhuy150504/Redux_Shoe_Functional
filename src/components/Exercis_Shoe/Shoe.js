import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/Action/ActionShoe'

export default function Shoe(props) {
    const {name, image, price, id} = props.shoe
    const dispatch = useDispatch()

  return (
    <div className='col-3 text-dark text-center'>
    <div className="card m-2">
        <img className="card-img-top " src={image} style={{width:'100%'}} alt="image" />
        <div className="card-body">
            <h4 className="card-title">{name.length > 14 ? name.substr(0,14) : name.length}</h4>
            <p className="card-text">{price}</p>
            <div className='text-center'><button onClick={() => dispatch(addToCart(props.shoe))} className='btn btn-dark'>Add to Card</button></div>
        </div>
    </div>
</div>
  )
}
