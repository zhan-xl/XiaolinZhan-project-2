import React, {createContext, useState} from 'react';
import Game from "../pages/Game";
import App from "../App";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const AnswerData = createContext(undefined);

export function AnswerContext() {
  const [answerState, setAnswerState] = useState([]);

  const stateObject = {
    answerState: answerState,
    setAnswerState: setAnswerState,
  };

  return (
      <AnswerData.Provider value={stateObject}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<App />} />
              <Route path="game/normal" element={<Game />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnswerData.Provider>
  )
}