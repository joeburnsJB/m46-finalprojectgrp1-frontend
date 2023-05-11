import './underx.css';
import { useEffect, useState } from 'react';
import * as React from 'react';

const Underx = ({APIurl, titleText}) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [saleVal, setSaleVal] = useState(null);
    const [origVal, setOrigVal] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [saleGameTitle, setSaleTitle] = useState(null);
    const [open, setOpen] = useState(true)
    useEffect(() => {
      const fetchData = async () => {
      try {
        let response = await fetch(APIurl);
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
    }, [])
  function handleClick (game) {
    let gameSaleprice = game.salePrice
    let gameOrigPrice = game.normalPrice
    let gameDiscount = Math.round(game.savings)
    let gameTitle = game.title
    setSaleVal(gameSaleprice);
    setOrigVal(gameOrigPrice);
    setDiscount(gameDiscount);
    setSaleTitle(gameTitle);
    setOpen(!open);
    }
  function handleClose () {
    setOpen(!open);
  }
  return (
    <div className='containerbox'>
      <br></br>
      <h1 id='headerStyle'>{titleText}
      </h1>
      {errorMsg && <h3>{errorMsg}</h3>}
      {open ? 
      <div></div> : 
      <div id='popUpBox'>
        <div id='xStyle' onClick={() => handleClose()}>❌</div>
        <div id='saleText'>Game: {saleGameTitle}</div>
        <div id='saleText'>Price: ${saleVal} <del>${origVal}</del></div>
        <div id='saleText'>{discount}% OFF!!</div>
      </div>}
      <div id='buttonContainer'>
      {allCharacters.length == 0 &&
      <div id='headerStyle'>No sales...</div>
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

export default Underx;