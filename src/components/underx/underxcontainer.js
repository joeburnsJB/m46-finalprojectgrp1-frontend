import './underx.css';
import Underx from './underx.js';
import * as React from 'react';

const Underxcontainer = () => {
  return (
    <div className='underxcontainer'>
        <Underx APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&steamRating=85&upperPrice=7&lowerPrice=4&pageSize=10&pageNumber=0' titleText = 'Games under £7'/>
        <Underx APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&steamRating=85&upperPrice=3.99&lowerPrice=0.01&pageSize=10&pageNumber=0' titleText = 'Games under £4'/>
        <Underx APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=0&pageSize=10&pageNumber=0' titleText = 'Free games'/>
    </div>
  );
};

export default Underxcontainer;