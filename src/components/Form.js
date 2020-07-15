import React, { Component } from "react";

class Form extends Component {
  textInput = React.createRef();

  toAddTask = () => {
    this.props.toAddTask(this.textInput.value);
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="enter the task" ref={(input) => (this.textInput = input)} />
        <button onClick={this.toAddTask}>ADD</button>
      </div>
    );
  }
}
export default Form;
