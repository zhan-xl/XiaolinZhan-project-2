import React, {createContext, useState} from 'react';

export const guessesContext = createContext(undefined);

export function guessesProvider(props) {
  const [guesses, setGuesses] = useState([]);
  
  const stateObject = {
    guesses,
    setGuesses,
  };
  
  return (
      <guessesContext.Provider value={stateObject}>
        {props.children}
      </guessesContext.Provider>
  )
}