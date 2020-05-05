import React from 'react';

const UserTable = ({ users, userDelete, userEdit }) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((u) => (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.username}</td>
          <td>
            <button type="button" onClick={() => userEdit(u)}>Edit</button>
            <button type="button" onClick={() => userDelete(u.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
