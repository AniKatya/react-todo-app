import React from "react";

export default class Task extends React.Component{
  toToggleTask = (el) => {
    this.props.toToggleTask(el.target.id);
  };
  render() {
      const style= this.props.todo.status? {textDecoration: "line-through"}: {textDecoration: "initial"};
    return (
      <div className="todo-line">
        <input type="checkbox" id={this.props.todo.id} onClick={(el)=>this.toToggleTask(el)}></input>
        <div style={style}>{this.props.todo.description}</div>
      </div>
    );
  }
}

