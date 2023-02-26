import React from 'react'
import { useSelector } from 'react-redux'
import Shoe from './Shoe'

export default function ListShoe() {

    const dataShoe = useSelector(state => state.ShoeReducer.dataShoe)
    const renderListShoe = () => {
        return dataShoe.map((shoe, index) => {
            return (
                <Shoe key={index} shoe={shoe} />
            )
        })
    }
  return (
    <div className='row'>
        {renderListShoe()}
    </div>
  )
}
