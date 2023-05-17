import React, { useState } from "react"
import { updateUserInfo } from "../../utils"
import "./updateUser.css"

const UpdateUser = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [updateMessage, setUpdateMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const handleUsernameUpdate = async (e) => {
    e.preventDefault()
    if (!validateUsername(username)) {
      setErrorMessage("Failed to update. Please enter a valid username.")
      return
    }
    try {
      await updateUserInfo("username", username)
      setUpdateMessage("Username updated successfully")
      setUsername("")
      setErrorMessage("")
    } catch (error) {
      console.log("Error updating username:", error.message)
      setErrorMessage("Failed to update. Please enter a valid username.")
    }
  }

  const handleEmailUpdate = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setErrorMessage("Failed to update. Please enter a valid email.")
      return
    }
    try {
      await updateUserInfo("email", email)
      setUpdateMessage("Email updated successfully")
      setEmail("")
      setErrorMessage("")
    } catch (error) {
      console.log("Error updating email:", error.message)
      setErrorMessage("Failed to update. Please enter a valid email.")
    }
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault()
    if (!validatePassword(password)) {
      setErrorMessage("Failed to update. Please enter a valid password.")
      return
    }
    try {
      await updateUserInfo("password", password)
      setUpdateMessage("Password updated successfully")
      setPassword("")
      setErrorMessage("")
    } catch (error) {
      console.log("Error updating password:", error.message)
      setErrorMessage("Failed to update. Please enter a valid password.")
    }
  }

  const handleClearMessage = () => {
    setUpdateMessage("")
    setErrorMessage("")
  }

  const validateUsername = (value) => {
    return /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\:"'<>,.?/~`]+$/.test(value)
  }

  const validateEmail = (value) => {
    return /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(value)
  }

  const validatePassword = (value) => {
    return /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\:"'<>,.?/~`]+$/.test(value)
  }

  return (
    <div className="updateinformation">
      <h2>Update User Information</h2>
      <form className="formupdate">
        <div className="usernameupdate">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleUsernameUpdate}>Update Username</button>
        </div>

        <div className="emailupdate">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailUpdate}>Update Email</button>
        </div>

        <div className="passwordupdate">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordUpdate}>Update Password</button>
        </div>
      </form>
      {updateMessage && (
        <div className="popup-box">
          <p>{updateMessage}</p>
          <button onClick={handleClearMessage} className="ok-button">
            OK
          </button>
        </div>
      )}
      {errorMessage && (
        <div className="popup-box error">
          <p>{errorMessage}</p>
          <button onClick={handleClearMessage} className="ok-button">
            OK
          </button>
        </div>
      )}
    </div>
  )
}

export default UpdateUser
