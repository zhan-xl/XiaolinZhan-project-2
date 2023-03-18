import React, {Component} from "react";

class CheckButton extends Component {
  render() {
    return (
      <button
          className='check-button'
          onClick={this.props.onClick}
      >
        Check
      </button>
        )

  }
}

export default CheckButton;