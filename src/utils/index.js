import {writeCookie} from "../common"

export const registerUser = async (username, password, newUser) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password
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

export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
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

