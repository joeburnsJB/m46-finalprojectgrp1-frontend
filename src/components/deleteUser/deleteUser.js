import React from "react";
import { deleteAccount } from "../../utils";
import './deleteUser.css';

const DeleteAccount = () => {
    const handleDelete = async () => {
        try {
          await deleteAccount();
          console.log("Account deleted successfully");
        } catch (error) {
          console.log("Error deleting account:", error.message);
        }
      };
      

  return (
    <div className="delete-account-container">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDelete} className="delete-account-button">
        Delete Account
      </button>
    </div>
  );
};

export default DeleteAccount;
