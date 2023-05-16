import { useState, useEffect } from 'react';
import './UsersList.css';
import {getUsers} from "../../utils";

const UsersList = () => {
  const [userList, setUserList] = useState([" "]);
  const [loadingCheck, setloadingCheck] = useState(false);
  useEffect(() => {
    const fetchUserList = async () => {
        let data = await getUsers()
        setUserList(data)
        setloadingCheck(!loadingCheck)
    };
    fetchUserList();
  // eslint-disable-next-line
  }, []);

  return (
    <div className='userlist-container'>
      <h1>Users List</h1>
      <ul className='user-list'>
        {userList ?
        <>
        {userList.map((username) => (
          <li className='user-item'>{username}</li>
        ))}
        </>
        :
        <>
          {loadingCheck ?
          <>Please log in</>
          :
          <div>Loading...</div>
          }
        </>
        }
      </ul>
    </div>
  );
};

export default UsersList;