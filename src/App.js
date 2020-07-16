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

  toToggleTask = (id) => {
    let chosenTask = { ...this.state.todos[id], status: !this.state.todos[id].status };
    this.setState({
      ...(this.state.todos[id] = chosenTask),
    });
  };

  archiveCompletedTodos = ()=>{
    let noncompletedTasks = this.state.todos.filter(todo=>!todo.status);
    this.setState({
      todos: noncompletedTasks
    })
  }
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
        <button onClick={this.archiveCompletedTodos}>ARCHIVE</button>
      </div>
    );
  }
}

export default App;
