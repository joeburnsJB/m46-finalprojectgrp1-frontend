import React, { useState, useEffect } from "react";
import { updateUserInfo, getUsers } from "../../utils";
import { Link } from 'react-router-dom';
import './updateUser.css';
import DeleteAccount from "../../components/deleteUser/deleteUser";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const users = await getUsers();
      setIsLoggedIn(users.length > 0);
    };

    checkLoginStatus();
  }, []);

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo("username", username);
      console.log("Username updated successfully");
    } catch (error) {
      console.log("Error updating username:", error.message);
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo("email", email);
      console.log("Email updated successfully");
    } catch (error) {
      console.log("Error updating email:", error.message);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo("password", password);
      console.log("Password updated successfully");
    } catch (error) {
      console.log("Error updating password:", error.message);
    }
  };

  return (
    <div className="updateinformation">
      {isLoggedIn ? (
        <>
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

            <div className="passwordupdate">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handlePasswordUpdate}>Update Password</button>
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
          </form>
          <DeleteAccount />
        </>
      ) : (
        <div>
          <h2>Update user information</h2>
          <Link to="/login-register" className="feature-container">
            <p>To access the update feature, please log in</p>
            <button className="login-button">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;