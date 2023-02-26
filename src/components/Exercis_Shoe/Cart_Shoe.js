import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseReducer, removeShoe } from '../../redux/Action/ActionShoe';

export default function Cart_Shoe(props) {

    const cartShoe = useSelector(state => state.ShoeReducer.cartShoe)
    const dispatchRemove = useDispatch()
    const dispatchIncreaseReduced = useDispatch()

    const renderCart = () => {
        return cartShoe.map((shoe, index) => {
            let {id, name, price, image, soLuong} = shoe
            return (
            <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td><button onClick={() => dispatchIncreaseReduced(increaseReducer(id, false))}  className='btn btn-success'>-</button>
                    <strong>{soLuong}</strong>
                    <button onClick={() => dispatchIncreaseReduced(increaseReducer(id, true))}  className='btn btn-success'>+</button>
                </td>
                <td>{price * soLuong}</td>
                <td><img src={image} style={{width: 75, height: 100}} alt="image_moadal" /></td>
                <td><button onClick={() => dispatchRemove(removeShoe(id))} className="btn btn-danger">Remove</button></td>
            </tr>
            )
        })
    };    


  return (
    <div className='container'>
    <table className='table text-white'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Quanlity</th>
                <th>Price</th>
                <th>IMG</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {renderCart()}
        </tbody>
    </table>
  </div>
  )
}
