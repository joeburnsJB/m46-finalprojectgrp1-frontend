import { useState } from "react"
import { registerUser } from "../../utils"
import "../register/Register.css"

const Register = ({ newUser }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const submitHandler = async (e) => {
    e.preventDefault()
    await registerUser(username, password, email, newUser)
  }

  return (
    <div className="register-container">
      <h1 className="FlipCardH1">Create an account</h1>
      <form onSubmit={submitHandler} className="formRegister">
        <label>Username:
          <input onChange={(e) => setUsername(e.target.value)}></input>
        </label>

        <label>Email:
          <input onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <label>Password:
          <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
        </label>

        <button type="submit" className="userRegisterButton">REGISTER</button>
      </form>
    </div>
  )
}

export default Register