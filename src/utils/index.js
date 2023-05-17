import {writeCookie} from "../common"
import { getCookie } from '../common';

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
        let jwt = getCookie("jwt_token")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}wishlists/addwishlist`,{
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
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getWishList = async()=>{
    try{
        let jwt = getCookie("jwt_token")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}wishlists/getwishlist`,{
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
    console.log("in remove wishlist")
    try{
        let jwt = getCookie("jwt_token")
        console.log("jwt here",jwt)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}wishlists/deletewishlist`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify({
                "steamAppID": gameID,
            })
        })
        let statusCode = await response.status
        console.log("status below");
        console.log(statusCode);
        return statusCode
    } catch (error) {
        console.log("error below")
        console.log(error);
    }
}

export const getUsers = async()=>{
    try{
        let jwt = getCookie("jwt_token")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/getusers`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
        })
        const data = await response.json()
        let result = data.users.map(a => a.username);
        console.log(result)
        return result
    } catch (error) {
        console.log(error);
    }
}

export const deleteAccount = async () => {
  try {
    const token = getCookie("jwt_token");
    const username = await authCheck(token);
    
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/deleteuser`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username
      }),
    });

    if (response.ok) {
      window.alert("Account deleted successfully");
      window.location.href = "/login-register";
    } else {
      const errorData = await response.json();
      throw new Error(errorData.errorMessage);
    }
  } catch (error) {
    console.log("Error deleting account:", error.message);
  }
};

export const updateUserInfo = async (updateKey, updateValue) => {
    try {
      const token = getCookie('jwt_token');
      const username = await authCheck(token);
      
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/updateuser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "username": username,
          "updateKey": updateKey,
          "updateValue": updateValue
        }),
      });
  
      if (response.ok) {
        console.log('User information updated successfully');
        return username;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errorMessage);
      }
    } catch (error) {
      console.log('Error updating user information:', error.message);
      throw error;
    }
  };