import React, { useState } from "react";
import { updateUserInfo } from "../../utils";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo("username", username);
      await updateUserInfo("password", password);
      await updateUserInfo("email", email);
      console.log("User information updated successfully");
      // Add any additional logic or notifications here
    } catch (error) {
      console.log("Error updating user information:", error.message);
      // Handle the error or display an error message
    }
  };

  return (
    <div>
      <h2>Update User Information</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
