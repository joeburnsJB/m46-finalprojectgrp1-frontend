import React from 'react'
import './CartBackground.css'


const CartBackground = ({handleCartOpen, cartOpen}) => {
  return (
    
      
    
  
    <div onClick={handleCartOpen} className='background' style={{left: cartOpen ? '0' : '-100%'}} ></div>
   
  )
}

export default CartBackground