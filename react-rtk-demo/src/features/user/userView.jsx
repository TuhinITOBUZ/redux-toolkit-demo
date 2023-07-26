import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h2>Number of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
