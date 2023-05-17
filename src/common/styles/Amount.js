import React, { useEffect } from 'react'
import './Amount.css'

import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'

const Amount = ({ price,handleDecrease, handleIncrease, cartItems, name, quantity}) => {
    console.log(cartItems)
    console.log(quantity)
    

  return (
    <div className='amounts'>
        <div className='amount'>
          <button  onClick={handleDecrease}><span id={name}><AiOutlineMinusSquare className='icons' size={25} style={{color: 'red'}}  /></span></button>
            <h4>{quantity}</h4>
          <button  onClick={handleIncrease}><span id={name}><AiOutlinePlusSquare className='icons' size={25} style={{color: '#7bc45e'}}  /></span></button>
            
        </div>
        <div className='cart-prices'>
            <h4 className='cart-price'>${Number(price*quantity).toFixed(2)}  </h4>
        </div>
    </div>
  )
}

export default Amount