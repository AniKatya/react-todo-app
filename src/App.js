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
      <div className='todoList-main'>
        <Summary todosTotalNumber={this.state.todos.length} />
        <Form toAddTask={this.toAddTask} />
        <div className="todoList-lines">{this.state.todos
          ? this.state.todos.map((todo) => (
              <Task key={todo.id} toToggleTask={this.toToggleTask} todo={todo} />
            ))
          : null}
          </div>
        <button id="archive-btn" onClick={this.archiveCompletedTodos}>ARCHIVE</button>
      </div>
    );
  }
}

export default App;
