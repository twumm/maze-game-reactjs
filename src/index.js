import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import player from './anonymous_hacker.png'
import sprite from './bitcoin.png'

let squareArea = []
let customBoard = []

// Create a square
/*const Square = (props) => {
  return (
    <button
      className="square"
      onClick={() => alert(props.value)}
    >
    <img className="player-icon" src={player}>
    </img>
    </button>
  )
}*/

class Square extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  showIcon() {
    this.setState({display: !this.state.display})
  }
  
  render() {
    return (
      <button 
        className="square"
        /*onClick={() => !this.state.display}
        style={{display: 'show'}}
        // onKeyPress={() => alert(this.props.value)}*/
      >
        <img className="player-icon" src={player} />
        <img className="sprite-icon" src={sprite} />
      </button>
    )
  }
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
    // let customBoard = []
    let customRow = 4
    // let customRow = prompt('Please enter number of rows', 2)
    let customColumn = 4
    // let customColumn = prompt('Please enter number of columns', 2)

    /*while (customRow < 2 || isNaN(customRow)) {
      customRow = prompt('Please enter number of rows.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }

    while (customColumn < 2 || isNaN(customColumn)) {
      customColumn = prompt('Please enter number of columns.' + 
        'Only numbers greater than 1 are allowed.', 2)
    }*/

    for (let row = 0; row < customRow; row++) {
      let boardRow = []
      for (let column = 0; column < customColumn; column++) {
        boardRow.push(<Square value={row.toString() + column.toString()} key={row.toString() + column.toString()}/>)
        squareArea.push(`${row}${column}`)
      }
      customBoard.push(<div className="board-row">{ boardRow }</div>)
    }
    return customBoard
  }

  handlePlayerPosition() {
    // console.log(customBoard[2].props.children)
    // squareArea[4]
    /*squareArea[2] = this.setState({
      value: <img src={player}/>
    })*/

  }

  render() {
    return (
      <div>
        {this.createSquares()}
        {this.handlePlayerPosition()}
      </div>
    )
  }
}

class Sprite extends React.Component {

}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: <Player />
    }
  }

  handlePlayer() {
    const player = this.state.player
    console.log('e')
    /*if (event.keyCode === 38) {
      console.log('Entered')
    }*/
  }

  
  render() {
    return (
      <Board />
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
