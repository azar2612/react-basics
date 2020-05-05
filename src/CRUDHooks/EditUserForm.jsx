import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentuser, setEditing, userUpdate }) => {
  // user: { id: null, name: "", username: ""}
  const [user, setUser] = useState(currentuser);

  useEffect(() => {
    setUser(currentuser);
  }, [currentuser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userUpdate(user.id, user);
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
      <button type="submit">Update User</button>
      <button type="button" onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
