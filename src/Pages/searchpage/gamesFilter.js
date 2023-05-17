import { useState } from 'react';
import * as React from 'react';
import SearchPage from './searchresults';

const FilterPage = () => {
    const [updateStateArray, setUpdateStateArray] = useState([1])
    const [urlParams, setUrlParams] = useState("");
    const [maxPrice, setMaxPrice] = useState("70");
    const [minPrice, setMinPrice] = useState("0");
    const [minSteamScore, setMinSteamScore] = useState("0");
    const [minMetaScore, setMinMetaScore] = useState("0");
    function handleSubmit (event) {
        event.preventDefault()
        let URL = `&sortBy=Price&upperPrice=${maxPrice}&lowerPrice=${minPrice}&metacritic=${minMetaScore}&steamRating=${minSteamScore}&pageNumber=`  
        setUrlParams(URL)
        setUpdateStateArray([...updateStateArray,2])
    }
    function handleClear (event) {
        event.preventDefault()
        setMaxPrice("70")
        setMinPrice("0")
        setMinSteamScore("0")
        setMinMetaScore("0")
        handleSubmit(event)
    }
    return (
        <div>
            <button onClick={(event) => handleClear(event)}>Clear</button>
            <form onSubmit={handleSubmit}>
                Price range:
            <label>
                <input 
                type="text" 
                placeholder='from...'
                onChange={(e) => setMinPrice(e.target.value)}
                />
            </label>
            <label>
                <input 
                type="text" 
                placeholder='to...'
                onChange={(e) => setMaxPrice(e.target.value)}
                />
            </label>
            Min Metacritic score:
            <label>
                <input 
                type="text" 
                placeholder='score...'
                onChange={(e) => setMinMetaScore(e.target.value)}
                />
            </label>
            Min Steam score:
            <label>
                <input 
                type="text" 
                placeholder='score...'
                onChange={(e) => setMinSteamScore(e.target.value)}
                />
            </label>
            <input type="submit" />
            </form>
            <SearchPage setUrlParams = {setUrlParams} urlParams = {urlParams} titleText = 'Filter results'/>
        </div>
      );
}

export default FilterPage;