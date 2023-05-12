import './underx.css';
import Underx from './underx.js';
import Wishlist from './wishlist.js';
import { useEffect, useState } from 'react';
import * as React from 'react';
import {getWishList} from "../../utils";

const Underxcontainer = () => {
  const [wishListArray, setWishListArray] = useState();
  const [updateStateArray, setUpdateStateArray] = useState([1])
  useEffect(() => {
  const fetchData = async () => {
    let gamesOnWishListobj = await getWishList()
    let gamesOnWishList = JSON.stringify(gamesOnWishListobj).replaceAll(",", "%2C").replace(/[^a-zA-Z0-9%]/g, "");
    setWishListArray(gamesOnWishList)
  };
  fetchData();
  }, [updateStateArray])
  return (
    <div className='underxcontainer'>
      <p id='testText'>{wishListArray}</p>
      {wishListArray ?
      <>
        <Underx setWishListArray = {setWishListArray} wishListArray = {wishListArray} setUpdateStateArray = {setUpdateStateArray} updateStateArray = {updateStateArray} APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&steamRating=85&upperPrice=7&lowerPrice=4&pageSize=10&pageNumber=0' titleText = 'Games under £7'/>
        <Underx setWishListArray = {setWishListArray} wishListArray = {wishListArray} setUpdateStateArray = {setUpdateStateArray} updateStateArray = {updateStateArray} APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&steamRating=85&upperPrice=3.99&lowerPrice=0.01&pageSize=10&pageNumber=0' titleText = 'Games under £4'/>
        <Underx setWishListArray = {setWishListArray} wishListArray = {wishListArray} setUpdateStateArray = {setUpdateStateArray} updateStateArray = {updateStateArray} APIurl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=0&pageSize=10&pageNumber=0' titleText = 'Free games'/>
        <Wishlist setWishListArray = {setWishListArray} wishListArray = {wishListArray} setUpdateStateArray = {setUpdateStateArray} updateStateArray = {updateStateArray} titleText = 'Wishlist'/>
      </>
      :
      <>
       <h1>Loading...</h1>
      </>
      }
    </div>
  );
};

export default Underxcontainer;