import React, { useEffect, useState } from 'react'
import Pagination from '../../common/styles/Pagination';

import Cards from './Cards';
import './Shop.css'


const Shop = ({handleClick, games, gamesPerPage, paginate, currentPage, handleSort}) => {
    
  
  const indexOfLast = currentPage * gamesPerPage;
  const indexOfFirst = indexOfLast - gamesPerPage;
  const currentGames = games.slice(indexOfFirst, indexOfLast);

//to actually buy the game: `https://store.steampowered.com/app/${steamId}/Iron_Age/`

  return (
    
    <div className='shop'>
      <Transitions>
      <div className='select-wrapper'>
        <label htmlFor="sort">Sort by:</label>

          <select onChange={(e) => handleSort(e)} name="sort" id="sort">
          <option value="">--Choose your option--</option>
            <option value="cheapest">Cheapest first</option>
            <option value="expensive">Most expensive first</option>
            <option value="sale">Biggest sale %</option>
            
        </select>
        </div>
        <Cards 
        games={currentGames}
        handleClick={handleClick}
        
        />
        <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={games.length}
        paginate={paginate}
        currentPage={currentPage}
        />
      </Transitions>
    </div>
    
  )
}

export default Shop