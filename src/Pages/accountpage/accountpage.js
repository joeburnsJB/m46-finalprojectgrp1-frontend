import React from "react";
import DeleteAccount from "../../components/deleteUser/deleteUser";
import UpdateUser from "../../components/updateUser/updateUser";

const AccountPage = () => {

  return (
    <div>
      <h2>My Account</h2>
      <DeleteAccount />
      <UpdateUser />
    </div>
  );
};

export default AccountPage;