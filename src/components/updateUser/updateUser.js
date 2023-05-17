import React, { useState } from "react";
import { updateUserInfo } from "../../utils";
import './updateUser.css';

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
    </div>
  );
};

export default UpdateUser;
