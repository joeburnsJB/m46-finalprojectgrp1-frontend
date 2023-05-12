import './LoginRegister.css';

import Register from '../components/register/Register';
import Login from '../components/login/Login'
import Toggle from '../components/Toggle/Toggle';
import Underxcontainer from '../components/underx/underxcontainer';


import {deleteCookie, getCookie} from "../common"
import { authCheck } from "../utils";

import { useState, useEffect } from 'react';

const LoginRegister = () => {

    const [user, setUser] = useState();
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleToggle = (isChecked) => {
    setIsFlipped(isChecked);
    };
  
    useEffect(()=>{
      let jwt = getCookie("jwt_token")
      console.log("!!!!!!!!!!")
      console.log(jwt);
  
      if (jwt !== false){
        loginWithToken(jwt);
      }
    }, []);
  
    const loginWithToken = async (jwt) => {
      const user = await authCheck(jwt)
      setUser(user);
    }
  
    const handleLogOut = (e) => {
      e.preventDefault();
      setUser(null);
      deleteCookie("jwt_token");
    }
  
    return (
      <div className="App">
        {user ? (
            <div className="welcome-container">
              <h1 className="welcome-message">Welcome back, {user}!</h1>
              <Underxcontainer/>
              <button className="logout" onClick={handleLogOut}>Log Out</button>
            </div>
        ) : (
        <div>
              <div className="toggle-container">
              <button className={!isFlipped ? "active" : ""} onClick={() => setIsFlipped(false)}>Register</button>
              <Toggle onToggle={handleToggle} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
              <button className={isFlipped ? "active" : ""} onClick={() => setIsFlipped(true)}>Login</button>
            </div>
            <div className="container">
              <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card">
                  <div className="front">
                    <Register newUser={setUser} />
                  </div>
                  <div className="back">
                    <Login newUser={setUser} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="welcome-container">
            <h1 className="signin-message">Please sign in.</h1>
            </div>
          </div>
        )}
      </div>
    );
  }

export default LoginRegister;