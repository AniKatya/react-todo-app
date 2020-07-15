import React from "react";
import "./App.css";
import Summary from "./components/Summary";
import Task from "./components/Task";
import Form from "./components/Form";

class App extends React.Component {
  state = { todos: [] };

  toAddTask = (input) => {
    let updatedTodos = [
      ...this.state.todos,
      {
        id: this.state.todos.length,
        description: input,
        status: false,
      },
    ];
    this.setState({
      todos: updatedTodos,
    });
  };

  // toToggleTask = (id) => {
  //   let chosenTask = this.state.todos[id].id === id ? this.state.todos[0] : null;
  //   console.log(chosenTask, this.state.todos[0].id, id, this.state.todos[(id = 0)].status);
  //   this.setState({ ...chosenTask, status: true });
  // };
  render() {
    return (
      <div>
        <Summary todosTotalNumber={this.state.todos.length} />
        <Form toAddTask={this.toAddTask} />
        {this.state.todos
          ? this.state.todos.map((todo) => (
              <Task key={todo.id} toToggleTask={this.toToggleTask} todo={todo} />
            ))
          : null}
      </div>
    );
  }
}

export default App;
