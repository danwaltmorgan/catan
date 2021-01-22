import React, { useState, useEffect } from 'react';
import Hexagon from './Hexagon';
import tiles from './tiles'
import './App.css'


function Board() {

  const [layout, setLayout] = useState(tiles)
  const [numbers, setNumbers] = useState([2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12])
  const [desert, setDesert] = useState(0)

  function shuffle(item) {
    let temp = item.slice()

    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]]
    }


    if (item === layout) {
      setLayout(temp)
    }
    if (item === numbers) {
      setNumbers(temp)
      let test = layout.filter((t,i) => {
        if (t.color === "orange") {
          return t
        }
      })
      console.log(test)
    }
  }

  // This can be done better
  // Just sets the
  let test = 0;
  for (let i in layout) {
    if (layout[i]["color"] === "orange") {
      test = i
    }
  }



  let row1 = layout.map((tile, i) => {
    // if (i < 3) {

      if (tile.color == "orange") {
        return (
          <Hexagon
            color={tile.color}
            num={"R"}
          />
        )
    } if (i === 18) {
      return (
        <Hexagon
          color={tile.color}
          num={numbers[test]}
        />
      )
    } else {
        return (
          <Hexagon
            color={tile.color}
            num={numbers[i]}
          />
        )
      }
    // }
  })


  return(
    <div class="board">
      <div class="three-row"></div>
      <div class="right-block"></div>
      <div class="four-row"></div>
      <div class="five-row"></div>
      <div class="six-row"></div>
      <div class="seven-row"></div>

      {row1}

      <br />
      <br />
      <br />
      <button onClick={() => shuffle(layout)}>Shuffle</button>
      <button onClick={() => shuffle(numbers)}>Shuffle Numbers</button>
    </div>
  )
}

export default Board
