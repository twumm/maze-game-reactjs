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


ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
