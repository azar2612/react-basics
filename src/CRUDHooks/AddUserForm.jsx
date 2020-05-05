import React, { useState } from 'react';

const AddUserForm = ({ userAdd }) => {
  const initialState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userAdd({
      id: null,
      name: user.name,
      username: user.username,
    });
    setUser(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button type="submit">Add New User</button>
    </form>
  );
};

export default AddUserForm;
