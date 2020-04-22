import React, { Component } from "react";
import shortid from "shortid";
import "./Todo.css";

class TodoForm extends Component {
  state = {
    todoText: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add({
      id: shortid.generate(),
      text: this.state.todoText,
      completed: false,
    });
    this.setState({ todoText: "" });
  };

  render() {
    const { todoText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="todoText"
          type="text"
          value={todoText}
          onChange={this.handleChange}
          placeholder="Enter Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

class TodoText extends Component {
  render() {
    const { todoObj } = this.props;
    return (
      <>
        <p>{todoObj.text}</p>
      </>
    );
  }
}

class Todo extends Component {
  state = {
    todos: [],
  };
  addTodo = (todo) =>
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoForm add={this.addTodo} />
        {todos.map((s) => (
          <TodoText todoObj={s} />
        ))}
      </>
    );
  }
}
export default Todo;
