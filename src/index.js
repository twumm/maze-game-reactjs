import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Create a square
const Square = (props) => {
  return (
    <button className="square">
      {props.value}
    </button>
  )
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
