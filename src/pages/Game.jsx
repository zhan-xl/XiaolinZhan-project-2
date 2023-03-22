import React, {useContext, useEffect} from "react";
import {AnswerContext, DictContext} from "../App";
import {text} from "../resources/commonSixWords.json";

export default function Game() {

  return (
      <div className='game-buttons'>
        <button className='game-button'><a href='/game/normal'>Normal</a></button>
        <button className='game-button'><a href='/game/difficult'>Difficult</a></button>
      </div>
  );
}