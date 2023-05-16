// import { useEffect, useState } from 'react';
// import * as React from 'react';
// import Underx from './underx';

// const FilterPage = () => {
//     const [updateStateArray, setUpdateStateArray] = useState([1])
//     const [theAPIurl, setTheAPIurl] = useState("https://www.cheapshark.com/api/1.0/deals?steamAppID=0");
//     const [wishListArray, setWishListArray] = useState("eg");
//     const [maxPrice, setMaxPrice] = useState("0");
//     const [minPrice, setMinPrice] = useState("70");
//     const [minSteamScore, setMinSteamScore] = useState("0");
//     const [minMetaScore, setMinMetaScore] = useState("0");
//     const [onSale, setOnSale] = useState(0);
//     useEffect(() => {
//         const fetchData = async () => {
//           setTheAPIurl(theAPIurl)
//         };
//         fetchData();
//     }, [updateStateArray])
//     function handleSubmit (event) {
//         event.preventDefault()
//         let URL = `https://www.cheapshark.com/api/1.0/deals?sortBy=Price&upperPrice=${maxPrice}&lowerPrice=${minPrice}&metacritic=${minMetaScore}&steamRating=${minSteamScore}&onSale=${onSale}&pageNumber=`  
//         setTheAPIurl(URL)
//         setUpdateStateArray([...updateStateArray,2])
//     }
//     function handleClear (event) {
//         event.preventDefault();
//         setTheAPIurl("https://www.cheapshark.com/api/1.0/deals?steamAppID=0")
//         setUpdateStateArray([...updateStateArray,2])
//     }
//     function handleToggle () {
//         if (onSale === 1){setOnSale(0)}
//         else {setOnSale(1)}
//     }
//     return (
//         <div>
//             <button onClick={(event) => handleClear(event)}>Clear</button>
//             <form onSubmit={handleSubmit}>
//                 Price range:
//             <label>
//                 <input 
//                 type="text" 
//                 placeholder='from...'
//                 onChange={(e) => setMinPrice(e.target.value)}
//                 />
//             </label>
//             <label>
//                 <input 
//                 type="text" 
//                 placeholder='to...'
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 />
//             </label>
//             Min Metacritic score:
//             <label>
//                 <input 
//                 type="text" 
//                 placeholder='score...'
//                 onChange={(e) => setMinMetaScore(e.target.value)}
//                 />
//             </label>
//             Min Steam score:
//             <label>
//                 <input 
//                 type="text" 
//                 placeholder='score...'
//                 onChange={(e) => setMinSteamScore(e.target.value)}
//                 />
//             </label>
//             <label>
//             On sale?
//             <input
//                 type="checkbox"
//                 onChange={() => handleToggle()}
//             />
//             </label>
//             <input type="submit" />
//             </form>
//             <Underx setWishListArray = {setWishListArray} wishListArray = {wishListArray} setUpdateStateArray = {setUpdateStateArray} updateStateArray = {updateStateArray} APIurl = {theAPIurl} titleText = 'Filter results'/>
//         </div>
//       );
// }

// export default FilterPage;