import {writeCookie} from "../common"

export const registerUser = async (username, password, email, newUser) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "email": email
        })
      });
      console.log(response)
      const data = await response.json();
      console.log(data);
      newUser(data.user.username);
      writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
      console.log(error);
    }
  }

export const loginUser = async (username, password, email, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        })
        const data = await response.json()
        console.log(data)
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    
    }
}
export const authCheck = async (jwtToken) => {
  try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/authcheck`, {
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type" : "application/json",
              "Authorization": `Bearer ${jwtToken}`
          }
      })
      const data = await response.json()
      console.log("authCheck", data)
      return data.user.username
  } catch (error) {
      console.log(error)
  }
}

export const addWishList = async(gameID)=>{
  try{
      // let jwt = getCookie("jwt_token")
      let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjgzODE3MTI2fQ.ev2fcRWyvI01QhtuFj7QQ74bHzfSEotMt3lHOj7kPsw"
      console.log(jwt)
      const response = await fetch("http://localhost:5001/wishlists/addwishlist",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jwt}`
          },
          body: JSON.stringify({
              "steamAppID": gameID,
          })
      })
      const data = await response.json()
  } catch (error) {
      console.log(error);
  }
}

export const getWishList = async()=>{
  try{
      // let jwt = getCookie("jwt_token")
      let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjgzODE3MTI2fQ.ev2fcRWyvI01QhtuFj7QQ74bHzfSEotMt3lHOj7kPsw"
      console.log(jwt)
      const response = await fetch("http://localhost:5001/wishlists/getwishlist",{
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jwt}`
          },
      })
      const data = await response.json()
      let result = data.wishlists.map(a => a.steamAppID);
      return result
  } catch (error) {
      console.log(error);
  }
}

export const removeWishList = async(gameID)=>{
  try{
      // let jwt = getCookie("jwt_token")
      let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjgzODE3MTI2fQ.ev2fcRWyvI01QhtuFj7QQ74bHzfSEotMt3lHOj7kPsw"
      console.log(jwt)
      const response = await fetch("http://localhost:5001/wishlists/deletewishlist",{
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jwt}`
          },
          body: JSON.stringify({
              "steamAppID": gameID,
          })
      })
      const data = await response.json()
  } catch (error) {
      console.log(error);
  }
}