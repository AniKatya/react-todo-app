import React, { Component } from "react";

class Form extends Component {
  textInput = React.createRef();

  toAddTask = () => {
    if (this.textInput.value) {
      this.props.toAddTask(this.textInput.value);
      this.textInput.value="";
    }
  };
  render() {
    return (
      <div className="form-main">
        <input type="text" placeholder="Type a task description" ref={(input) => (this.textInput = input)} />
        <button id="add-btn" onClick={this.toAddTask}>ADD</button>
      </div>
    );
  }
}
export default Form;
