import React from 'react'
import './CartItem.css'
import Amount from './Amount'

const CartItem = ({name, url, price, handleDecrease, handleIncrease, cartItems, amount, quantity}) => {
  return (
    <>
      {quantity>0 ? <><div className='cart-card' id={name}><img src={url} alt='game'></img>
        <h3 className='cart-name'>{name} </h3>
        <Amount quantity={quantity} amount={amount} price={price} name={name}  handleDecrease={handleDecrease} handleIncrease={handleIncrease} cartItems={cartItems}/></div></> :null}
        
    </>
        
        
    
  )
}

export default CartItem