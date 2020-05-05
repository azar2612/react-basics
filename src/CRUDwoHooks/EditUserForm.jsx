import React, { Component } from "react";

class EditUserForm extends Component {
  // Lifecycle
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.currentuser) {
      return {
        user: nextProps.currentuser,
      };
    }
  }

  // user: { id: null, name: "", username: ""}
  state = {
    user: this.props.currentuser,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { user } = { ...this.state };

    const currentState = user;
    currentState[name] = value;
    this.setState({ user: currentState });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.userUpdate(user.id, user);
  };

  render() {
    const { user } = this.state;
    const { setEditing } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={this.handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={this.handleChange}
        />
        <button type="submit">Update User</button>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default EditUserForm;
