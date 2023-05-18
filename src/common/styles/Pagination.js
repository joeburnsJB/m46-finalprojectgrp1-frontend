
import React from 'react';
import './Pagination.css'

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
  const pageNumbers = [];
 

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
    
  }

 

  return (
    <nav>
      <ul className='pagination'>
          <a href="#" onClick={() => currentPage!==pageNumbers[0] ? paginate(currentPage-1) : paginate(currentPage)} >&laquo;</a>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {currentPage==number ? <button className='page active'>{number}</button> : <button className='page'>{number}</button>  }
            </a>
          </li>
        ))}
        <a href="#" onClick={() => currentPage!==pageNumbers[pageNumbers.length-1] ? paginate(currentPage+1) : paginate(currentPage)} >&raquo;</a>
      </ul>
    </nav>
  );
};

export default Pagination;