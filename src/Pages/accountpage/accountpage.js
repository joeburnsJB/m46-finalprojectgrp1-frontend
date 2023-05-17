import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DeleteAccount from "../../components/deleteUser/deleteUser"
import UpdateUser from "../../components/updateUser/updateUser"
import { authCheck } from "../../utils"
import { getCookie } from "../../common"
import "./accountpage.css"

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loadingCheck, setLoadingCheck] = useState(true)

  useEffect(() => {
    const jwtToken = getCookie("jwt_token")
    if (jwtToken) {
      authCheck(jwtToken)
        .then((username) => {
          setIsLoggedIn(true)
          setLoadingCheck(false)
        })
        .catch((error) => {
          setIsLoggedIn(false)
          setLoadingCheck(false)
          console.log(error)
        })
    } else {
      setIsLoggedIn(false)
      setLoadingCheck(false)
    }
  }, [])

  return (
    <div>
      {loadingCheck ? (
        <div className="loading-animation">
          <div className="loading-spinner"></div>
        </div>
      ) : isLoggedIn ? (
        <>
          <UpdateUser />
          <DeleteAccount />
        </>
      ) : (
        <>
        <h1>Update User Information</h1>
        <Link to="/login-register" className="feature-container">
          <p>To change your user details please log in</p>
          <button className="login-button">Login</button>
        </Link>
        </>
      )}
    </div>
  )
}

export default AccountPage 