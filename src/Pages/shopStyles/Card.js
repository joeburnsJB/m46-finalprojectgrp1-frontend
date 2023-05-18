import React from 'react'
import './Card.css'

const Card = ({ name, url, price, normalPrice, saving, review, score, handleClick, }) => {
    
    const metacriticUrl=`https://www.metacritic.com/${review}`

    
  return (
    <div className='card' id={name} >
        <div className='image'>
            <img src={url} alt='game' width="250" height="auto"></img>
            <div className="content">
                <div className="text">
                    <a href={metacriticUrl} target='_blank' rel='noreferrer'>Click for review on Metacritic</a>
                </div>
            </div>
        </div>
        <h3 className='name'>{name} </h3>
        <div className='more'>
            <h3>-{Math.floor(saving)}%</h3>
            <div className='prices'>
                <h4 className='normal-price'>${normalPrice}  </h4>
                <h4 className='price'>${price}  </h4>
            </div>
        </div>
        
        <button className='addcart' onClick={handleClick}>Add to cart</button>

    </div>
  )
}

export default Card