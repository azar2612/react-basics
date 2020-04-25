import React, { Component } from "react";

class FormContact extends Component {
  state = {
    username: "",
    password: "",
    designation: "",
    remember: false,
    color: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChecbox = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, password, designation, remember, color } = this.state;
    return (
      <div className="form-contact">
        <input
          name="username"
          value={username}
          type="text"
          placeholder="Enter your username"
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={this.handleChange}
        />
        <input
          name="designation"
          value={designation}
          type="text"
          placeholder="Enter your designation"
          onChange={this.handleChange}
        />
        <input
          name="remember"
          checked={remember}
          type="checkbox"
          onChange={this.handleChecbox}
        />
        <select name="color" value={color} onChange={this.handleChange}>
          <option>red</option>
          <option>blue</option>
          <option>green</option>
        </select>
        <button type="button" onClick={this.handleSubmit}>
          submit
        </button>

        <p>{username}</p>
        <p>{password}</p>
        <p>{designation}</p>
        <p>{remember ? "true" : "false"}</p>
        <p>{color}</p>
      </div>
    );
  }
}

export default FormContact;
