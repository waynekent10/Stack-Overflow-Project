import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import getUsers from '../api/userData';
import { useAuth } from '../utils/context/authContext';
import UserCard from '../components/UserCard';

function UserPage() {
  const [users, setUsers] = useState([]);

  const { user } = useAuth();

  const getAllTheUsers = () => {
    getUsers(user.uid).then(setUsers);
  };

  useEffect(() => {
    getAllTheUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      {/* <Link href="/user/new" passHref /> */}
      <>
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {users.map((mockUser) => (
            <UserCard key={user.firebaseKey} userObj={mockUser} onUpdate={getAllTheUsers} />
          ))}
        </div>
      </>
    </div>
  );
}

export default UserPage;
