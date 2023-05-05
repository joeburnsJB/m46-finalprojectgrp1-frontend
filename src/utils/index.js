import {writeCookie} from "../common"

export const registerUser = async (username, password, newUser) => {
    try {
      const response = await fetch("http://localhost:5001/users/register", {
        method: "POST",

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
        const response = await fetch("http://localhost:5001/users/login", {
            method: "POST",

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
      const response = await fetch("http://localhost:5001/users/authcheck", {
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

