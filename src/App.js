import React from "react";
import {createContext, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./pages/Game";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import GameNormal from './pages/GameNormal';
import GameDifficult from './pages/GameDifficult';

export const AnswerContext = createContext(undefined);
export const DictContext = createContext(undefined);

function App() {
  const [answer, setAnswer] = useState('answer');
  const [dict, setDict] = useState([]);
  return (
      <DictContext.Provider value={[dict, setDict]}>
        <AnswerContext.Provider value={[answer, setAnswer]}>
          <NavBar>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/game' element={<Game />}/>
                <Route path='/game/normal' element={<GameNormal />}/>
                <Route path='/game/difficult' element={<GameNormal />}/>
                <Route path='/rules' element={<Rules />}/>
              </Routes>
            </BrowserRouter>
          </NavBar>
        </AnswerContext.Provider>
      </DictContext.Provider>
  );
}

export default App;