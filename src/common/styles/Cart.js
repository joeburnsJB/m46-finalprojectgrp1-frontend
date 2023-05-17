import React from 'react'
import './Cart.css'
import CartItem from './CartItem'


const Cart = ({cartItems, handleCartOpen,handleDecrease, handleIncrease, cartOpen}) => {
  return (
    
    <div className='cart' style={{right: cartOpen ? '0' : '-110%'}} >
        <h2>Your shopping cart:</h2>
        <ul className='items'>
          {cartItems.map(item => 
            <li><CartItem
            key = {item.id}
            name={item.name}
            url={item.picture}
            price={item.price}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            cartItems={cartItems}
            quantity={item.quantity}
            
            /></li>)}
        </ul>
        <div className='buttons'>
          <h1>Total: ${cartItems.reduce((a,b) => a+(b.price*b.quantity),0).toFixed(2)}</h1>
          <button className='checkout-button'>Checkout</button>
          <button onClick={handleCartOpen} className='close-button'>Close</button>
        </div>
    </div>
    
  )
}

export default Cart