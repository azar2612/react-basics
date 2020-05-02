import React, { Component } from "react";

const initialState = {
  id: null,
  name: "",
  username: "",
};

class AddUserForm extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.userAdd({
      id: null,
      name: this.state.name,
      username: this.state.username,
    });

    this.setState(initialState);
  };

  render() {
    const { name, username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <button type="submit">Add New User</button>
      </form>
    );
  }
}

export default AddUserForm;
