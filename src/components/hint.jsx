import React, {Component} from "react";

class Hint extends Component {
  state = {
    word: 'accept'
  }

  render() {
    return (
        <div id='flex-container'>
          <div style={{backgroundColor: this.props.colors[0]}}>{this.props.value[0]}</div>
          <div style={{backgroundColor: this.props.colors[1]}}>{this.props.value[1]}</div>
          <div style={{backgroundColor: this.props.colors[2]}}>{this.props.value[2]}</div>
          <div style={{backgroundColor: this.props.colors[3]}}>{this.props.value[3]}</div>
          <div style={{backgroundColor: this.props.colors[4]}}>{this.props.value[4]}</div>
          <div style={{backgroundColor: this.props.colors[5]}}>{this.props.value[5]}</div>

        </div>
    )
  };
}

export default Hint;