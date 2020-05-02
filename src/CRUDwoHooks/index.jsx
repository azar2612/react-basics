import React, { Component } from "react";
import AddUserForm from "./AddUserForm";
import UserTable from "./UserTable";

const userData = [
  { id: 1, name: "Chaal", username: "chaalpritam" },
  { id: 2, name: "Sathihs", username: "sathishkumar" },
];

// const initialState = { id: null, name: '', username: '' };

class CRUDwoHooks extends Component {
  state = {
    users: userData,
  };

  addUser = (user) => {
    user.id = this.state.users.length + 1;
    this.setState(({ users }) => ({ users: [user, ...users] }));
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <h2>Add User</h2>
        <AddUserForm userAdd={this.addUser} />

        <UserTable users={users} />
      </>
    );
  }
}
export default CRUDwoHooks;
