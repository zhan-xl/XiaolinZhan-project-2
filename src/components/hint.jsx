import React from "react";

export default function Hint(props) {

  const letterList = [];
  for (let i = 0; i < props.value.length; i++) {
    const letter = (
      <div key={i} style={{backgroundColor: props.colors[i]}}>{props.value[i]}</div>
    )
    letterList.push(letter);
  }
  return (
      <div id='flex-container'>
        {letterList}
      </div>
  )
}