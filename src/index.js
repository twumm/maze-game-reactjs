import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import player from './anonymous_hacker.png'

// Create a square
const Square = (props) => {
  return (
    <button className="square">
      {props.value}
    </button>
  )
}

// Create a player
const Player = (props) => {
  return (
    <img className="player-icon" src={player}>
      {props.value}
    </img>
  )
}

class Board extends React.Component {

  createSquares() {
    let customBoard = []
    let customRow = prompt('Please enter number of rows', 2)
    let customColumn = prompt('Please enter number of columns', 2)

    while (customRow < 2 || isNaN(customRow)) {
      customRow = prompt('Please enter number of rows.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }

    while (customColumn < 2 || isNaN(customColumn)) {
      customColumn = prompt('Please enter number of columns.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }

    for (let row = 0; row < customRow; row++) {
      let boardSquareRow = []
      for (let column = 0; column < customColumn; column++) {
        boardSquareRow.push(<Square />)
      }
      customBoard.push(<div className="board-row">{ boardSquareRow }</div>)
    }
    return customBoard
  }

  render() {
    return (
      <div>
        {this.createSquares()}
        
      </div>
    )
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
