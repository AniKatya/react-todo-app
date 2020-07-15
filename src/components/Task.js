import React from "react";

export default class Task extends React.Component{
//   toToggleTask = (el) => {
//     this.props.toToggleTask(el.target.id);
//   };
  render() {
    return (
      <div className="todo-line">
        <input type="checkbox" id={this.props.todo.id}></input>
        <div>{this.props.todo.description}</div>
      </div>
    );
  }
}

