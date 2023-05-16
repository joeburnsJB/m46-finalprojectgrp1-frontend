import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Underxcontainer from "../../components/underx/underxcontainer";
// import FilterPage from "../../components/underx/gamesFilter";
import { authCheck } from "../../utils/index";
import { getCookie } from '../../common';

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = getCookie("jwt_token");
    if (jwtToken) {
      authCheck(jwtToken)
        .then((username) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          console.log(error);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="flexbox1">
        <div className="box1">
          <Underxcontainer setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn} id="under4"></Underxcontainer>
        </div>
        <div className="box2">
          {/* <Underx id="under7"></Underx> */}
        </div>
      </div>
      <div className="flexbox2">
        {isLoggedIn ? (
          <div className="box3">
          </div>
        ) : (
          <a className="feature-container" href="/login-register">
            <p>To access more features please log in</p>
            <button className="login-button">Login</button>
          </a>
        )}
        {/* <div className="box4">Test 4</div> */}
      </div>
    </div>
  );
};

export default Homepage;
