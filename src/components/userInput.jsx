import React, {Component} from "react";

class UserInput extends Component {

  handleChange = () => {

  }
  render() {
    return (
          <input
              id='text-box'
              type='text'
              onChange={this.props.onChange}
              value={this.props.value}
          />
    )
  }
}

export default UserInput;