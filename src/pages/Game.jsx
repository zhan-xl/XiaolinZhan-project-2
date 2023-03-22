import React from "react";

export default function Game() {

  return (
      <div className='game-buttons'>
        <button className='game-button'><a href='/game/normal'>Normal</a></button>
        <button className='game-button'><a href='/game/difficult'>Difficult</a></button>
      </div>
  );
}