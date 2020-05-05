import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserTable from './UserTable';
import EditUserForm from './EditUserForm';

const CRUDHooks = () => {
  const userData = [
    { id: 1, name: 'Chaal', username: 'chaalpritam' },
    { id: 2, name: 'Sathihs', username: 'sathishkumar' },
  ];

  const initialEditFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentuser, setCurrentuser] = useState(initialEditFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const delteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentuser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
  };

  return (
    <>
      <h1>CRUD Hooks</h1>
      {editing ? (
        <>
          <h2>Edit User</h2>
          <EditUserForm
            setEditing={setEditing}
            currentuser={currentuser}
            userUpdate={updateUser}
          />
        </>
      )
        : (
          <>
            <h2>Add User</h2>
            <AddUserForm userAdd={addUser} />
          </>
        )}
      <h2>View Users</h2>
      <UserTable users={users} userDelete={delteUser} userEdit={editUser} />
    </>
  );
};

export default CRUDHooks;
