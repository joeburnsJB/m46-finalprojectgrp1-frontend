import { useState, useEffect } from 'react';
import './UsersList.css';
import {getUsers} from "../../utils";

const UsersList = () => {
  const [userList, setUserList] = useState([" "]);

  useEffect(() => {
    const fetchUserList = async () => {
        let data = await getUsers()
        setUserList(data)
    };
    fetchUserList();

  }, []);

  return (
    <div className='userlist-container'>
      <h1>Users List</h1>
      <ul className='user-list'>
        {userList.map((username) => (
          <li className='user-item'>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;