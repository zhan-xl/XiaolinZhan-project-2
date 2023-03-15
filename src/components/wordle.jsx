import React, {Component} from "react";

class Wordle extends Component {
  state = {
    answer: 'MOOSE',
    userInput: ''
  };

  check = () => {
    if (this.state.answer === this.state.userInput.toUpperCase()) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  updateUserInput = (event) => {
    this.setState({userInput : event.target.value})
    return null;
  }

  render() {
    return <React.Fragment>
      <input id='input' type="text" onChange={this.updateUserInput}/>
      <button onClick={this.check}>Check</button>
    </React.Fragment>
  }
}

export default Wordle;