import React, {useContext, useEffect, useState} from "react";
import Message from "../components/message";
import Hint from "../components/hint";
import {AnswerContext, DictContext} from "../App";
import {textSix} from "../resources/commonSixWords.json";
import {textSeven} from "../resources/commonSevenWords.json"

export default function GameNormal() {
  const [answer, setAnswer] = useContext(AnswerContext)
  const [dict, setDict] = useContext(DictContext);
  const [attempt, setAttempt] = useState(answer.length - 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  let [hints, setHints] = useState([]);

  useEffect(() => {
    const length = window.location.pathname.split('/').pop() === 'normal' ? 6 : 7;
    let dictionary;
    if (length === 6) {
      dictionary = textSix.split(' ');
      setMessage('You have chose normal level.')
    } else {
      dictionary = textSeven.split(' ');
      setMessage('You have chose difficult level.')
    }
    setDict(dictionary);
    let newAnswer = dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase();
    setAnswer(newAnswer);
    console.log('The answer is: ' + newAnswer);
  }, [])

  function handleInput(event) {
    setGuess(event.target.value.toUpperCase());
  }
  function handleCheck() {
    if (!isNumberOfLetter()) {
      setMessage('Please enter a word with ' + answer.length + ' letter.');
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
    return !!dict.includes(guess.toLowerCase());
  }

  const isNumberOfLetter = () => {
    return guess.length === answer.length;
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
        <Message message={message}/>
        <input
            id='text-box'
            type='text'
            maxLength={answer.length}
            value={guess}
            onChange={handleInput}
        />
        <button onClick={handleCheck} style={{marginLeft: 8}}>check</button>
        <h4>
          Hints:
        </h4>
        {hints.map(hint => (
            <Hint key={hint.id} value={hint.value} colors={hint.colors}/>
        ))}
      </div>
  );
}