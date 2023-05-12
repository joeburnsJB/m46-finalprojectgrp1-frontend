import { useState, useEffect } from 'react';
import './UsersList.css';

const UsersList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch('http://localhost:5001/users/getusers');
      const data = await response.json();
      if (response.ok) {
        setUserList(data.users);
      } else {
        console.log(data.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='userlist-container'>
      <h1>User List</h1>
      <ul className='user-list'>
        {userList.map((username, index) => (
          <li key={index} className='user-item'>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;