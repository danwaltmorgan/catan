import React from 'react';
import './App.css'

function Hexagon(props) {
  return (
    <div class="hex">
      <div class="top" style={{color:props.color}}></div>
      <div class="middle" style={{backgroundColor:props.color}}>
        <div class="circle">
          <p class="numbers">{props.num}</p>
        </div>
      </div>
      <div class="bottom" style={{color:props.color}}></div>
    </div>
  )
}

export default Hexagon
