import React, { Component } from "react";

class LocalStorage extends Component {
  state = {
    todoText: "",
    data: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("todo", this.state.todoText);
    this.setState({ todoText: "" });
  };

  getData = () => {
    const cc = localStorage.getItem("todo");
    this.setState({ data: cc });
  };

  render() {
    const { todoText, data } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="todoText"
            type="text"
            value={todoText}
            onChange={this.handleChange}
            placeholder="Enter Todo"
          />
          <button type="submit">Set data to Local Storage</button>
        </form>

        <button type="button" onClick={this.getData}>
          Get Data from localstorage
        </button>
        <p>{data && data}</p>

        <button type="button" onClick={() => localStorage.removeItem("todo")}>
          Delte Data from localstorage
        </button>

        <button type="button" onClick={() => localStorage.clear()}>
          Clear Data from localstorage
        </button>
      </>
    );
  }
}
export default LocalStorage;
