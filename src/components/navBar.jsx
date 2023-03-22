import React from "react";

export default function NavBar(props) {
  return (
      <>
        <div id='nav-bar-box'>
          <div className='nav-bar-tab' ><a href='/'>Home</a></div>
          <div className='nav-bar-tab'><a href='/game'>Game</a></div>
          <div className='nav-bar-tab'><a href='/rules'>Rules</a></div>
        </div>
        {props.children}
      </>

  );

}