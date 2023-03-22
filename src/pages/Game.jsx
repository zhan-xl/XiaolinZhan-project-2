import React, {useContext}from "react";
import {AnswerContext} from "../App";

export default function Game() {
  const answer = useContext(AnswerContext)
  console.log(answer);

  return (
      <div className='game-buttons'>
        <button className='game-button'><a href='/game/normal'>Normal</a></button>
        <button className='game-button'><a href='game/difficult'>Difficult</a></button>
      </div>
  );
}