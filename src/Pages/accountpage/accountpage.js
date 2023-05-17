import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DeleteAccount from "../../components/deleteUser/deleteUser"
import UpdateUser from "../../components/updateUser/updateUser"
import { authCheck } from "../../utils"
import { getCookie } from "../../common"

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const jwtToken = getCookie("jwt_token")
    if (jwtToken) {
      authCheck(jwtToken)
        .then((username) => {
          setIsLoggedIn(true)
        })
        .catch((error) => {
          setIsLoggedIn(false)
          console.log(error)
        })
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <div>
      {isLoggedIn ? (
        <>
          <UpdateUser />
          <DeleteAccount />
        </>
      ) : (
        <div>
          <Link to="/login-register" className="feature-container">
            <p>To access Users List feature please log in</p>
            <button className="login-button">Login</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default AccountPage
