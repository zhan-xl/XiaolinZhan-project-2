import React, {Component} from "react";

class Rules extends Component {
  render() {
    return (
      <div className='rules'>
        <h4>How To Play</h4>
        <div>Guess the Wordle.</div>
        <div>Each guess must be a valid word.</div>
        <div>The color of the tiles will change to show how close your guess was to the word.</div>
        <div>Green is in the word and in the correct spot.</div>
        <div>Yellow is in the word but in the wrong spot.</div>
        <div>White is not in the word in any spot.</div>
      </div>)

  }
}

export default Rules;