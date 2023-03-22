import React from "react";
import {createContext, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./pages/Game";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import GameNormal from './pages/GameNormal';
import GameDifficult from './pages/GameDifficult';

export const AnswerContext = createContext();

function App() {
  const [answer, setAnswer] = useState('this is my answer');
  return (
      <AnswerContext.Provider vallue={answer}>
        <NavBar>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/game' element={<Game/>}/>
              <Route path='/game/normal' element={<GameNormal/>}/>
              <Route path='/game/difficult' element={<GameDifficult/>}/>
              <Route path='/rules' element={<Rules/>}/>
            </Routes>
          </BrowserRouter>
        </NavBar>
      </AnswerContext.Provider>
  );
}

export default App;