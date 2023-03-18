import React, {Component} from "react";
import Hint from "./components/hint";
import Message from "./components/message";
import UserInput from "./components/userInput";
import CheckButton from "./components/checkButton";
import {Link} from "react-router-dom";

class Difficult extends Component {
  state = {
    answer: 'ABILITY',
    attempt: 5,
    guess: '',
    message: 'Welcome, this is lever difficult.',
    hints: [
      { id: 1, value: '', colors: ['','','','','','','']},
      { id: 2, value: '', colors: ['','','','','','','']},
      { id: 3, value: '', colors: ['','','','','','','']},
      { id: 4, value: '', colors: ['','','','','','','']},
      { id: 5, value: '', colors: ['','','','','','','']},
      { id: 6, value: '', colors: ['','','','','','','']},
    ],
    map: new Map()
  };

  handleInput = (e) => {
    this.setState({guess: e.target.value.toUpperCase()});
  }

  handleCheck = (guess) => {
    if (this.state.guess.length !== 7) {
      this.setState({message: 'Please enter a word with 6 letter.'});
    } else if (this.state.answer === this.state.guess.toUpperCase()) {
      this.setState({message: 'Congratulation! Would you like to try again?'});
    } else if (this.state.attempt === 0) {
      this.setState({message: 'Game over. The answer is: ' + this.state.answer + '.'});
    } else {
      this.handleMessage();
      this.handleHint();
      this.setState({guess: ''});
    }
  }

  handleMessage = () => {
    this.setState({attempt: this.state.attempt - 1});
    this.setState({message: 'You have ' + this.state.attempt + ' more chances.'});
  }

  handleHint = () => {
    let hints = [...this.state.hints];
    hints[5 - this.state.attempt].value = this.state.guess;
    hints[5 - this.state.attempt].colors = this.handleColors();
    this.setState(hints)
  }

  handleColors = () => {
    let guess = this.state.guess;
    let answer = this.state.answer;
    let colors = Array(answer.length).fill('white');
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        colors[i] = 'green';
      }
    }
    for (let i = 0; i < guess.length; i++) {
      if (colors[i] !== 'green') {
        let reg = new RegExp(guess[i], 'g');
        let numOfOccInAns = (answer.match(reg) || []).length;
        let numOfGreen = 0;
        for (let j = 0; j < guess.length; j++) {
          if (colors[j] === 'green' && guess[j] === guess[i]) {
            numOfGreen++;
          }
        }
        let numOfOccInGuess = 0;
        if (i !== 0) {
          numOfOccInGuess = (guess.substring(0, i).match(reg) || []).length;
        }
        if (numOfOccInAns - numOfGreen > numOfOccInGuess) {
          colors[i] = 'yellow';
        }
      }
    }
    return colors;
  }

  render() {
    return (
        <div>
          <Message message={this.state.message} />
          <UserInput value={this.state.guess} onChange={this.handleInput} />
          <CheckButton onClick={this.handleCheck} />
          <h4>
            Hints:
          </h4>

          {this.state.hints.map(hint => (
              <Hint key={hint.id} value={hint.value} colors={hint.colors}/>
          ))}
          <Link to='/'><button>Choose level</button></Link>
        </div>
    );
  }
}

export default Difficult;