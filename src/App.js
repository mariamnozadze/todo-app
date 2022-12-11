import React, { Component } from "react";
import { Navbar } from "./components/Navbar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Mariam",
      todoItems: [
        { action: "Buy Milk", done: true },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newTodo: "",
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          ></input>
        </td>
      </tr>
    ));

  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === "Name1" ? "Name2" : "Name1",
  //   });
  // };
  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newTodo}
            onChange={this.updateValue}
          ></input>
          <button className="btn btn-primary" onClick={this.newTodo}>
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
