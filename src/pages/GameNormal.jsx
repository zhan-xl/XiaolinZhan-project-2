import React, {useEffect, useState} from "react";
import Message from "../components/message";
import {text} from '../resources/commonSixWords.json';
import Hint from "../components/hint";

export default function GameNormal() {
  let [answer, setAnswer] = useState('');
  let [words, setWords] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Welcome, this is normal level.');
  let [hints, setHints] = useState([]);

  useEffect(() => {
    words = text.split(' ');
    answer = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWords(words);
    setAnswer(answer);
    setAttempt(answer.length - 1)
  }, [])

  function handleInput(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleCheck() {
    if (!isNumberOfLetter()) {
      setMessage('Please enter a word with 6 letter.');
      return null;
    }
    if (!isValidWord()) {
      setMessage('Please enter a valid word.');
      return null;
    }

    if (answer === guess.toUpperCase()) {
      setMessage('Congratulation! Would you like to try again?');
    } else if (attempt === 0) {
      setMessage('Game over. The answer is: ' + answer + '.');
    } else {
      setMessage('You have ' + attempt + ' more chances.');
      setAttempt(attempt - 1);
      handleHint();
      setGuess('');
    }
  }


  const isValidWord = () => {
    if (words.includes(guess.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  const isNumberOfLetter = () => {
    if (guess.length !== 6) {
      return false;
    } else {
      return true;
    }
  }

  const handleHint = () => {
    setHints([
      ...hints,
      {id: attempt, value: guess, colors: handleColors()}
    ]);
  }

  const handleColors = () => {
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

  return (
      <div className='game'>
        {console.log(answer)}
        <Message message={message}/>
        <input
            id='text-box'
            type='text'
            maxLength={6}
            value={guess}
            onChange={handleInput}
        />
        <button onClick={handleCheck}>check</button>
        <h4>
          Hints:
        </h4>
        {hints.map(hint => (
            <Hint key={hint.id} value={hint.value} colors={hint.colors}/>
        ))}

      </div>
  );
}