import React from "react";
import DeleteAccount from "../../components/deleteUser/deleteUser";
import UpdateUser from "../../components/updateUser/updateUser";

const AccountPage = () => {

  return (
    <div>
      <UpdateUser />
      <DeleteAccount />
    </div>
  );
};

export default AccountPage;