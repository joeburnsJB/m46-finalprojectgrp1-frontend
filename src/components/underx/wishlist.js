import './underx.css';
import { useEffect, useState } from 'react';
import * as React from 'react';
import {removeWishList} from "../../utils";

const Wishlist = (props) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [saleVal, setSaleVal] = useState(null);
    const [origVal, setOrigVal] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [steamAppID, setSteamAppID] = useState(null);
    const [saleGameTitle, setSaleTitle] = useState(null);
    const [open, setOpen] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
        try {
          const URLbase = "https://www.cheapshark.com/api/1.0/deals?storeID=1&steamAppID="
          let APIurlWishList = URLbase.concat(props.wishListArray)
          let response = await fetch(APIurlWishList);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
        const data = await response.json();
        setAllCharacters(data);
        } catch (err) {
          console.log(err)
          setErrorMsg(err)
        }
      };
      fetchData();
      }, [props])
  function handleClick (game) {
    let gameSaleprice = game.salePrice
    let gameOrigPrice = game.normalPrice
    let gameDiscount = Math.round(game.savings)
    let gameTitle = game.title
    let steamAppID = game.steamAppID
    setSaleVal(gameSaleprice);
    setOrigVal(gameOrigPrice);
    setDiscount(gameDiscount);
    setSaleTitle(gameTitle);
    setSteamAppID(steamAppID)
    setOpen(!open);
    }
  function handleClose () {
    setOpen(!open);
  }
  function HandleWishlist (steamAppID) {
    let wishListSteamIDsArray = props.wishListArray
    let indexID = wishListSteamIDsArray.indexOf(steamAppID);
    if (indexID === 0) {
        let steamAppIDCut = steamAppID.concat("%2C")
        wishListSteamIDsArray.replace(steamAppIDCut, 1);
    }
    else {
      let steamAppIDCut = "%2C".concat(steamAppID)
      wishListSteamIDsArray.replace(steamAppIDCut, 1);
    }
    const updateBackend = async () => {
      const statusCode = await removeWishList(steamAppID)
      console.log("response below (wishlist)")
      console.log(statusCode)
      if (statusCode === 204){
        props.setWishListArray(wishListSteamIDsArray)
        props.setUpdateStateArray([...props.updateStateArray,2])
        setOpen(!open)
      }
    }
    updateBackend()
    
    setOpen(!open)
  }
  return (
    <div className='containerbox'>
      <br></br>
      <h1 id='headerStyle'>{props.titleText}
      </h1>
      {errorMsg && <h3>{errorMsg}</h3>}
      {open ? 
      <div></div> : 
      <div id='popUpBox'>
        <div id='xStyle' onClick={() => handleClose()}>❌</div>
        <div id='saleText'>Game: {saleGameTitle}</div>
        <div id='saleText'>Price: ${saleVal} <del>${origVal}</del></div>
        <div id='saleText'>{discount}% OFF!!</div>
        <div id='headerStyle' onClick={() => HandleWishlist(steamAppID)}>Remove from wishlist</div>
      </div>}
      <div id='buttonContainer'>
      {allCharacters.length == 0 &&
      <div id='headerStyle'>Wishlist empty...</div>
    }
      {allCharacters.map((game, index) => {
        return (
          <div>
            <button id='buttonStyling' className='buttonStyleRemove' onClick={() => handleClick(game)}>
              <img key={index} src = {game.thumb}></img>
              <p><del>${game.normalPrice}</del></p>
              <p>${game.salePrice}</p>
            </button>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Wishlist;